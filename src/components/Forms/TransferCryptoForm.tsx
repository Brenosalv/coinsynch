'use client'

import { Button } from '@/components/ui/button'
import { Form, FormField, FormItem, FormLabel } from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useWalletContext } from '@/contexts/WalletContext'
import { transferCryptoFormSchema } from '@/schemas/transferCryptoFormSchema'
import { CryptoType } from '@/types/crypto'
import { closeModal } from '@/utils/closeModal'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Input } from '../ui/input'

interface TransferCryptoFormProps {
  cryptoId: string
}

export function TransferCryptoForm({ cryptoId }: TransferCryptoFormProps) {
  const form = useForm<z.infer<typeof transferCryptoFormSchema>>({
    resolver: zodResolver(transferCryptoFormSchema),
  })

  const { reloadWalletCryptos } = useWalletContext()

  async function onSubmit(data: z.infer<typeof transferCryptoFormSchema>) {
    try {
      const response = await fetch('http://localhost:5000/wallet')
      const walletCryptos: CryptoType[] = await response.json()

      const cryptoFromWalletToUpdate = walletCryptos.find(
        (crypto) => crypto.asset_id === cryptoId,
      )

      const id = cryptoFromWalletToUpdate?.id ?? ''

      switch (data.transferType) {
        case 'Transfer in': {
          const updatedCrypto = {
            ...cryptoFromWalletToUpdate,
            quantity:
              Number(cryptoFromWalletToUpdate?.quantity ?? 0) +
              Number(data.quantity),
          }

          // Send PUT request to update existing crypto in wallet
          await fetch(`http://localhost:5000/wallet/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedCrypto),
          })

          break
        }
        case 'Transfer out': {
          if (
            (cryptoFromWalletToUpdate?.quantity ?? 0) > Number(data.quantity)
          ) {
            const updatedCrypto = {
              ...cryptoFromWalletToUpdate,
              quantity:
                Number(cryptoFromWalletToUpdate?.quantity ?? 0) -
                Number(data.quantity),
            }

            // Send PUT request to update existing crypto in wallet
            await fetch(`http://localhost:5000/wallet/${id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedCrypto),
            })
          } else {
            // Send DELETE request to remove the crypto from wallet
            await fetch(`http://localhost:5000/wallet/${id}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
            })
          }

          break
        }
        default:
          break
      }

      reloadWalletCryptos()
      closeModal()
    } catch (error) {
      console.error('Error updating/deleting crypto in/from wallet:', error)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-[24px]"
      >
        <FormField
          control={form.control}
          name="transferType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal">Transfer</FormLabel>
              <Select onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Transfer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Transfer in">
                    <div className="flex items-center gap-2">Transfer in</div>
                  </SelectItem>

                  <SelectItem value="Transfer out">
                    <div className="flex items-center gap-2">Transfer out</div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <Input
          label="Quantity"
          type="number"
          name="quantity"
          placeholder="0,00"
          className="pl-4 placeholder:text-gray-400 text-gray-400"
        />
        <Button
          type="submit"
          className="w-full py-[0.875rem] px-[1.5rem] h-10 max-sm:h-12"
        >
          Transfer Crypto
        </Button>
      </form>
    </Form>
  )
}
