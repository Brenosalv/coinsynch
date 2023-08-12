'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { SignInFormSchema } from '@/schemas/SignInFormSchema'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import Image from 'next/image'
import LockIcon from '../assets/lock.svg'
import MailIcon from '../assets/mail.svg'
import { Link } from './ui/link'

export function SignInForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const form = useForm<z.infer<typeof SignInFormSchema>>({
    resolver: zodResolver(SignInFormSchema),
  })

  function onSubmit(data: z.infer<typeof SignInFormSchema>) {
    toast({
      description: `You successfully signed in with ${data.email}.`,
    })

    // Here the data was not submitted for sign in as it was not required in the challenge, so I added a toast to represent that the user successfully signed in.
  }

  function handlePasswordVisibilityToggle() {
    setIsPasswordVisible((prev) => !prev)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email"
                  iconLeft={<Image src={MailIcon} alt="" />}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type={isPasswordVisible ? 'text' : 'password'}
                  placeholder="Password"
                  iconLeft={<Image src={LockIcon} alt="" />}
                  iconRight={
                    isPasswordVisible ? (
                      <EyeIcon onClick={handlePasswordVisibilityToggle} />
                    ) : (
                      <EyeOffIcon onClick={handlePasswordVisibilityToggle} />
                    )
                  }
                  {...field}
                />
              </FormControl>
              <div className="text-right">
                <Link href="#">Forgot password?</Link>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full py-[0.875rem] px-[1.5rem]">
          Sign in
        </Button>
      </form>
    </Form>
  )
}
