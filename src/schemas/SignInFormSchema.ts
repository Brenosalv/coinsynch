import { z } from 'zod'

export const signInFormSchema = z.object({
  email: z.string().email({
    message: 'It must be en email address with @.',
  }),
  password: z
    .string()
    .min(8, {
      message: 'The password must have at least 8 characters.',
    })
    .refine((value) => {
      const hasNumber = /\d/.test(value) // Check for at least 1 number
      const hasSpecialChar = /[!@#$%^&*()_+{}[\]:;<>,.?~/-]/.test(value) // Check for at least 1 special character

      return hasNumber && hasSpecialChar
    }, 'The password must contain at least 1 number and 1 special character.'),
})
