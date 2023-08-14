import { z } from 'zod'

export const subscribeFormSchema = z.object({
  email: z
    .string()
    .nonempty({
      message: 'Email is required.',
    })
    .email({
      message: 'Must be an email address',
    }),
})
