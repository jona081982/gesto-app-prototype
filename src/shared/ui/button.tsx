import * as React from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={twMerge(
          clsx(
            'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2962FF] disabled:opacity-50 disabled:pointer-events-none',
            {
              'bg-[#2962FF] text-white hover:bg-[#1E4FD8] shadow-lg shadow-[#2962FF]/20':
                variant === 'default',

              'border border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.06] hover:border-white/20':
                variant === 'outline',

              'bg-transparent text-white hover:bg-white/[0.05]':
                variant === 'ghost',
            },
            {
              'h-9 px-4 text-sm': size === 'sm',
              'h-11 px-5 text-sm': size === 'md',
              'h-14 px-8 text-base': size === 'lg',
            }
          ),
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'