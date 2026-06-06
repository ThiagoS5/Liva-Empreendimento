import { socialLinks } from '@/components/organisms/siteLinks'
import { cn } from '@/lib/utils'
import { Facebook, Instagram } from 'lucide-react'

interface SocialLinksProps {
  variant?: 'dark' | 'light'
  className?: string
}

export function SocialLinks({ variant = 'dark', className }: SocialLinksProps) {
  return (
    <div className={cn('flex items-center space-x-3', className)}>
      {socialLinks.map((link) => {
        const Icon = link.type === 'facebook' ? Facebook : Instagram

        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'flex size-8 items-center justify-center rounded-full transition-colors',
              variant === 'dark'
                ? 'bg-black text-white hover:opacity-80'
                : 'border border-white text-white hover:bg-white hover:text-black',
            )}
          >
            <Icon
              size={16}
              fill={link.type === 'facebook' ? 'currentColor' : 'none'}
              strokeWidth={link.type === 'facebook' ? 0 : 2}
            />
            <span className="sr-only">{link.label}</span>
          </a>
        )
      })}
    </div>
  )
}
