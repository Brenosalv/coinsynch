import { z } from 'zod'

let pw = ''

export const SignUpFormSchema = z.object({
  name: z.string().nonempty({
    message: 'Name is required.',
  }),
  email: z.string().email({
    message: 'Please provide a valid email address.',
  }),
  password: z
    .string()
    .min(8, 'The password must have at least 8 characters.')
    .refine((value) => {
      const hasNumber = /\d/.test(value) // Check for at least 1 number
      const hasSpecialChar = /[!@#$%^&*()_+{}[\]:;<>,.?~/-]/.test(value) // Check for at least 1 special character
      pw = value
      return hasNumber && hasSpecialChar
    }, 'The password must contain at least 1 number and 1 special character.'),
  confirmPassword: z
    .string()
    .min(8)
    .refine((value) => pw === value, {
      message: 'Passwords must match.',
    }),
  terms: z.boolean().refine((value) => value === true, {
    message: 'You must check to proceed.',
  }),
})
