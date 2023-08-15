'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { signInFormSchema } from '@/schemas/signInFormSchema'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import LockIcon from '../../assets/lock.svg'
import MailIcon from '../../assets/mail.svg'
import { Input } from '../ui/input'
import { Link } from '../ui/link'

export function SignInForm() {
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
  })

  const router = useRouter()

  function onSubmit(data: z.infer<typeof signInFormSchema>) {
    router.push('/dashboard')
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
