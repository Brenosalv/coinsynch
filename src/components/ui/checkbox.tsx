'use client'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'
import { useFormContext } from 'react-hook-form'
import { FormControl, FormField, FormItem, FormMessage } from './form'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, name, id }) => {
  const form = useFormContext()

  return (
    <FormField
      control={form.control}
      name={name ?? ''}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <CheckboxPrimitive.Root
              className={cn(
                'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
                className,
              )}
              id={id}
              checked={field.value}
              onCheckedChange={field.onChange}
              {...field}
            >
              <CheckboxPrimitive.Indicator
                className={cn('flex items-center justify-center text-current')}
              >
                <Check className="h-4 w-4" />
              </CheckboxPrimitive.Indicator>
            </CheckboxPrimitive.Root>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
