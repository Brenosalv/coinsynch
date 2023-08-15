'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { useFormContext } from 'react-hook-form'
import { FormControl, FormField, FormItem, FormMessage } from './form'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { name, iconLeft, iconRight, type, className, placeholder, disabled },
    ref,
  ) => {
    const form = useFormContext()

    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false)

    function handlePasswordVisibilityToggle() {
      setIsPasswordVisible((prev) => !prev)
    }

    return (
      <FormField
        control={form.control}
        name={name ?? ''}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <div className="relative">
                {iconLeft && (
                  <i className="absolute z-10 left-4 top-4 text-secondary-300">
                    {iconLeft}
                  </i>
                )}
                <input
                  placeholder={placeholder}
                  disabled={disabled}
                  type={
                    type === 'password'
                      ? isPasswordVisible
                        ? 'text'
                        : 'password'
                      : type
                  }
                  className={cn(
                    'relative flex w-full rounded-md border border-input bg-background px-[2.25rem] py-3 text-base  ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-md:text-base max-sm:text-sm placeholder:max-md:text-base placeholder:max-sm:text-sm',
                    iconLeft && 'pl-10',
                    className,
                  )}
                  {...field}
                />
                <i className="absolute right-4 bottom-3 text-secondary-300">
                  {type === 'password' ? (
                    isPasswordVisible ? (
                      <EyeIcon onClick={handlePasswordVisibilityToggle} />
                    ) : (
                      <EyeOffIcon onClick={handlePasswordVisibilityToggle} />
                    )
                  ) : (
                    iconRight
                  )}
                </i>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
