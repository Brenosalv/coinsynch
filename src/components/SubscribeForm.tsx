'use client'

import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Form, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { subscribeFormSchema } from '@/schemas/subscribeFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export function SubscribeForm() {
  const form = useForm<z.infer<typeof subscribeFormSchema>>({
    resolver: zodResolver(subscribeFormSchema),
    defaultValues: {
      email: '',
    },
  })

  const [isSubscriptionLoading, setIsSubscriptionLoading] = useState(false)

  async function onSubmit(values: z.infer<typeof subscribeFormSchema>) {
    try {
      setIsSubscriptionLoading(true)
      // Simulate a delay to see the loading spinner
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: values.email }),
      }

      // Send a POST request to the fake API using fetch
      const response = await fetch(
        'http://localhost:5000/subscriptions',
        requestOptions,
      )
      const data = await response.json()

      console.log('Subscription successful:', data)

      // Clear the form and loading state
      form.reset()
      setIsSubscriptionLoading(false)
    } catch (error) {
      console.error('Error subscribing:', error)
      setIsSubscriptionLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-[384px]"
      >
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Email"
          disabled={isSubscriptionLoading}
          className="px-4 text-foreground mt-[-0.5rem]"
          {...form.register('email')}
        />
        <Button
          className="w-full"
          type="submit"
          disabled={isSubscriptionLoading}
        >
          {isSubscriptionLoading && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          )}
          {isSubscriptionLoading ? 'Please wait' : 'Subscribe'}
        </Button>
      </form>
    </Form>
  )
}
