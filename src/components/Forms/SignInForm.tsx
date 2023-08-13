'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { toast } from '@/components/ui/use-toast'
import { SignInFormSchema } from '@/schemas/SignInFormSchema'
import Image from 'next/image'
import LockIcon from '../../assets/lock.svg'
import MailIcon from '../../assets/mail.svg'
import { Input } from '../ui/input'
import { Link } from '../ui/link'

export function SignInForm() {
  const form = useForm<z.infer<typeof SignInFormSchema>>({
    resolver: zodResolver(SignInFormSchema),
  })

  function onSubmit(data: z.infer<typeof SignInFormSchema>) {
    toast({
      description: `You successfully signed in with ${data.email}.`,
    })

    // Here the data was not submitted for sign in as it was not required in the challenge, so I added a toast to represent that the user successfully signed in.
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-[24px]"
      >
        <Input
          name="email"
          type="email"
          placeholder="Email"
          iconLeft={<Image src={MailIcon} alt="" />}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          iconLeft={<Image src={LockIcon} alt="" />}
        />
        <div className="text-right mt-[-16px]">
          <Link href="#">Forgot password?</Link>
        </div>
        <Button type="submit" className="w-full py-[0.875rem] px-[1.5rem]">
          Sign in
        </Button>
      </form>
    </Form>
  )
}
