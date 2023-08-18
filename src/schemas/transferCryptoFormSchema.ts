import { z } from 'zod'

export const transferCryptoFormSchema = z.object({
  transferType: z.string().nonempty({
    message: 'Choose between transfer in or out a crypto to continue.',
  }),
  quantity: z.string().nonempty({
    message: 'Add a positive number.',
  }),
})
