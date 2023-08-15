'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { signInFormSchema } from '@/schemas/signInFormSchema'
import { User } from '@/types/user'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import LockIcon from '../../assets/lock.svg'
import MailIcon from '../../assets/mail.svg'
import { Input } from '../ui/input'
import { Link } from '../ui/link'
import { toast } from '../ui/use-toast'

export function SignInForm() {
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
  })

  const router = useRouter()

  async function onSubmit(data: z.infer<typeof signInFormSchema>) {
    try {
      // Fetch user data from your fake API using fetch or axios
      const response = await fetch('http://localhost:5000/users') // Replace with your API endpoint
      const users = await response.json()

      // Check if the provided email and password match user data
      const user = users.find(
        (user: User) =>
          user.email === data.email && user.password === data.password,
      )

      if (user) {
        // Successful sign-in, navigate to dashboard
        router.push('/dashboard')
      } else {
        // Invalid sign-in attempt, display error message
        toast({
          variant: 'destructive',
          title: 'Login failed!',
          description: 'Invalid email or password.',
        })
      }
    } catch (error) {
      console.error('Error signing in:', error)
    }
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
