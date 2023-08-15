'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { signUpFormSchema } from '@/schemas/signUpFormSchema'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import LockIcon from '../../assets/lock.svg'
import MailIcon from '../../assets/mail.svg'
import UserIcon from '../../assets/user.svg'
import { Checkbox } from '../ui/checkbox'
import { Input } from '../ui/input'

export function SignUpForm() {
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
  })

  const router = useRouter()

  function onSubmit(data: z.infer<typeof signUpFormSchema>) {
    router.push('/dashboard')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <Input
          name="name"
          placeholder="Name"
          iconLeft={<Image src={UserIcon} alt="" />}
        />
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
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
          iconLeft={<Image src={LockIcon} alt="" />}
        />
        <div className="flex items-center gap-4">
          <Checkbox id="terms" name="terms" />
          <label
            htmlFor="terms"
            className="text-sm max-sm:text-xs max-sm:leading-[0.75rem] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-3 max-sm:mt-2"
          >
            I have read and accept the{' '}
            <span className="font-bold">Privacy Policy</span> and{' '}
            <span className="font-bold">Terms of User Sign up.</span>
          </label>
        </div>
        <Button type="submit" className="w-full py-[0.875rem] px-[1.5rem]">
          Sign up
        </Button>
      </form>
    </Form>
  )
}
