'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { ChevronDown, ChevronUp, EyeIcon, EyeOffIcon } from 'lucide-react'
import { useFormContext } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './form'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  label?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      iconLeft,
      iconRight,
      type,
      className,
      placeholder,
      disabled,
      label,
    },
  ) => {
    const form = useFormContext()

    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false)

    const inputRef = React.useRef<HTMLInputElement | null>(null)

    function handlePasswordVisibilityToggle() {
      setIsPasswordVisible((prev) => !prev)
    }

    function handleNumberDecrease() {
      if (inputRef.current && Number(inputRef.current.value) >= 0.01) {
        const newValue = String(
          (Number(inputRef.current.value) - 0.01).toFixed(2),
        )
        inputRef.current.value = newValue
        form.setValue('quantity', newValue)
      }
    }

    function handleNumberIncrease() {
      if (inputRef.current) {
        const newValue = String(
          (Number(inputRef.current.value) + 0.01).toFixed(2),
        )
        inputRef.current.value = newValue
        form.setValue('quantity', newValue)
      }
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
      if (type === 'number') {
        // Allow only positive numbers in number input
        event.target.value = event.target.value.replace(/[^-0-9.]/g, '')
      }
    }

    return (
      <FormField
        control={form.control}
        name={name ?? ''}
        render={({ field }) => (
          <FormItem>
            {label && <FormLabel className="font-normal">{label}</FormLabel>}
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
                  min={0}
                  step={0.01}
                  type={
                    type === 'password'
                      ? isPasswordVisible
                        ? 'text'
                        : 'password'
                      : type
                  }
                  className={cn(
                    'relative flex w-full rounded-md border border-input bg-background px-[2.25rem] py-3 text-base  ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-md:text-base max-sm:text-sm placeholder:max-md:text-base placeholder:max-sm:text-sm chevron-none',
                    iconLeft && 'pl-10',
                    className,
                  )}
                  {...field}
                  ref={inputRef}
                  onChange={(event) => {
                    if (type === 'number') {
                      handleInputChange(event)
                    }
                    field.onChange(event)
                  }}
                />
                <i className="absolute right-5 bottom-1.5 text-secondary-300">
                  {type === 'number' && (
                    <>
                      <ChevronUp size={16} onClick={handleNumberIncrease} />
                      <ChevronDown size={16} onClick={handleNumberDecrease} />
                    </>
                  )}
                </i>
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
