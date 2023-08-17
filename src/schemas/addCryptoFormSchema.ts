import { z } from 'zod'

export const addCryptoFormSchema = z.object({
  type: z.string().nonempty({
    message: 'Choose a crypto to continue.',
  }),
  quantity: z.string().nonempty({
    message: 'Add a positive number.',
  }),
})
