'use client'

import { Button } from '@/components/atom/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/atom/form'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { isValidPhoneNumber } from 'libphonenumber-js'
import { useEffect, useRef, useState } from 'react'
import { useForm, type FieldErrors } from 'react-hook-form'
import { z } from 'zod'
import { FloatingLabelInput } from '../molecules/FloatingLabelInput'
import { FloatingLabelTextarea } from '../molecules/FloatingLabelTextArea'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'O nome deve ter pelo menos 2 caracteres.',
  }),
  email: z.email({
    message: 'Por favor, insira um endereço de e-mail válido.',
  }),
  phone: z.string().refine((phone) => isValidPhoneNumber(phone, 'BR'), {
    message: 'Por favor, insira um número de telefone válido.',
  }),
  message: z.string().min(5, {
    message: 'A mensagem deve ter pelo menos 5 caracteres.',
  }),
})

type FormSchema = z.infer<typeof formSchema>

function clearTimer(timerRef: {
  current: ReturnType<typeof setTimeout> | null
}) {
  if (!timerRef.current) return
  clearTimeout(timerRef.current)
  timerRef.current = null
}

export function ContactForm() {
  const [sendStatus, setSendStatus] = useState<
    'default' | 'sending' | 'sent' | 'error'
  >('default')
  const statusTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isMountedRef = useRef(true)
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    mode: 'onTouched',
  })

  const { errors, dirtyFields, isValidating } = form.formState

  useEffect(() => {
    return () => {
      isMountedRef.current = false
      clearTimer(statusTimeoutRef)
    }
  }, [])

  function handleSubmitLead(values: FormSchema) {
    return new Promise<FormSchema>((resolve) => {
      statusTimeoutRef.current = setTimeout(() => resolve(values), 800)
    })
  }

  async function onValid(values: FormSchema) {
    clearTimer(statusTimeoutRef)

    setSendStatus('sending')

    try {
      await handleSubmitLead(values)
      if (!isMountedRef.current) return

      form.reset()
      setSendStatus('sent')
      statusTimeoutRef.current = setTimeout(
        () => setSendStatus('default'),
        3000,
      )
    } catch {
      if (!isMountedRef.current) return
      setSendStatus('error')
    }
  }

  function onInvalid(errors: FieldErrors<FormSchema>) {
    const [firstError] = Object.keys(errors) as Array<keyof FormSchema>
    if (firstError) form.setFocus(firstError)
  }

  const isFieldValid = (fieldName: keyof FormSchema) => {
    return dirtyFields[fieldName] && !errors[fieldName] && !isValidating
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onValid, onInvalid)}
        className="space-y-5"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FloatingLabelInput
                  id="name"
                  label="Nome"
                  {...field}
                  className={cn('w-full', {
                    'border-red-500 focus-visible:ring-red-500': errors.name,
                    'border-green-500 focus-visible:ring-green-500':
                      isFieldValid('name'),
                  })}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FloatingLabelInput
                  id="email"
                  label="Email"
                  {...field}
                  className={cn('w-full', {
                    'border-red-500 focus-visible:ring-red-500': errors.email,
                    'border-green-500 focus-visible:ring-green-500':
                      isFieldValid('email'),
                  })}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FloatingLabelInput
                  id="phone"
                  label="Telefone"
                  {...field}
                  className={cn('w-full', {
                    'border-red-500 focus-visible:ring-red-500': errors.phone,
                    'border-green-500 focus-visible:ring-green-500':
                      isFieldValid('phone'),
                  })}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FloatingLabelTextarea
                  id="message"
                  label="Mensagem"
                  className={cn('w-full', {
                    'resize-none': true,
                    'border-red-500 focus-visible:ring-red-500': errors.message,
                  })}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant="send"
          disabled={sendStatus === 'sending'}
          className="w-full"
        >
          {sendStatus === 'default' && 'Enviar Mensagem'}
          {sendStatus === 'sending' && 'Enviando...'}
          {sendStatus === 'sent' && 'Mensagem Enviada!'}
          {sendStatus === 'error' && 'Tentar novamente'}
        </Button>
        <p
          className={cn(
            'text-center text-sm font-medium transition-opacity',
            sendStatus === 'sent' && 'text-send opacity-100',
            sendStatus === 'error' && 'text-red-600 opacity-100',
            sendStatus !== 'sent' &&
              sendStatus !== 'error' &&
              'sr-only opacity-0',
          )}
          aria-live="polite"
          role="status"
        >
          {sendStatus === 'sent' && 'Formulário enviado com sucesso.'}
          {sendStatus === 'error' && 'Não foi possível enviar agora.'}
        </p>
      </form>
    </Form>
  )
}
