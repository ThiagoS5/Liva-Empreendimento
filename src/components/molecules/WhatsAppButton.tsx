import { Button } from '@/components/atom/button'
import { whatsappHref } from '@/components/organisms/siteLinks'
import { cn } from '@/lib/utils'
import { WhatsAppIcon } from './WhatsAppIcon'

interface WhatsAppButtonProps {
  className?: string
  buttonClassName?: string
}

export function WhatsAppButton({
  className,
  buttonClassName,
}: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={cn('block', className)}
    >
      <Button variant="send" className={cn('gap-2', buttonClassName)}>
        <WhatsAppIcon />
        WHATSAPP
      </Button>
    </a>
  )
}
