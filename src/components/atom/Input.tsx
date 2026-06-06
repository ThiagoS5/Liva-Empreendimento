import { cn } from '@/lib/utils'
import * as React from 'react'

export type InputProps = React.ComponentProps<'input'>

function Input({ className, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        //* !Mobile! */
        'h-12 w-full px-3 py-1',
        // ?--- APARÊNCIA BASE ---
        'rounded border-2 bg-transparent text-black',
        'placeholder:text-muted-foreground border-black border-2',
        'transition-all',
        // !--- ESTADOS ---
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black focus-visible:border-ring/30',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
