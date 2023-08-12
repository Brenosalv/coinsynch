import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, iconLeft, iconRight, ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        {iconLeft && (
          <i className="absolute left-4 text-secondary-300">{iconLeft}</i>
        )}
        <input
          type={type}
          className={cn(
            'flex w-full rounded-md border border-input bg-background px-[2.25rem] py-3 text-base  ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            iconLeft && 'pl-10',
            className,
          )}
          ref={ref}
          {...props}
        />
        {iconRight && (
          <i className="absolute right-4 text-secondary-300">{iconRight}</i>
        )}
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }