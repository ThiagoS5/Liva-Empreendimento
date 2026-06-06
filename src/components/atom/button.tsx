import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        primary:
          'border-2 border-black bg-transparent text-black hover:bg-black hover:text-white',
        filter: 'bg-black text-white',
        about:
          'border-2 border-white bg-transparent text-white hover:bg-white hover:text-black',
        send: 'bg-send text-white hover:bg-send/90',
        outline:
          'border border-white bg-transparent text-white hover:bg-white hover:text-black',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline focus-visible:underline focus-visible:ring-0 focus-visible:ring-offset-0',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const componentByMode = {
      false: 'button',
      true: Slot,
    } as const
    const Comp =
      componentByMode[String(asChild) as keyof typeof componentByMode]
    const buttonClassName = cn(buttonVariants({ variant, size, className }))

    return <Comp className={buttonClassName} ref={ref} {...props} />
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
