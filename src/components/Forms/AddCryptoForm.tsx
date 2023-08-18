'use client'

import { Button } from '@/components/ui/button'
import { Form, FormField, FormItem } from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useApiCryptoContext } from '@/contexts/ApiCryptoContext'
import { useWalletContext } from '@/contexts/WalletContext'
import { addCryptoFormSchema } from '@/schemas/addCryptoFormSchema'
import { CryptoType } from '@/types/crypto'
import { closeModal } from '@/utils/closeModal'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Input } from '../ui/input'

export function AddCryptoForm() {
  const form = useForm<z.infer<typeof addCryptoFormSchema>>({
    resolver: zodResolver(addCryptoFormSchema),
  })

  const { reloadWalletCryptos } = useWalletContext()

  const { cryptos } = useApiCryptoContext()

  async function onSubmit(data: z.infer<typeof addCryptoFormSchema>) {
    try {
      // Prepare crypto data
      const selectedCrypto = cryptos.find(
        (crypto) => crypto.asset_id === data.asset_id,
      )

      const response = await fetch('http://localhost:5000/wallet')
      const walletCryptos: CryptoType[] = await response.json()

      const cryptoFromWalletToUpdate = walletCryptos.find(
        (crypto) => crypto.asset_id === data.asset_id,
      )

      const updatedCrypto = {
        ...cryptoFromWalletToUpdate,
        quantity:
          Number(cryptoFromWalletToUpdate?.quantity ?? 0) +
          Number(data.quantity),
        price_change: selectedCrypto?.price_change,
      }

      const newCryptoToWallet = {
        ...selectedCrypto,
        quantity: Number(data.quantity),
      }

      // Check if the crypto already exists in the wallet
      const existingCryptoIndex = walletCryptos.findIndex(
        (crypto) => crypto.asset_id === data.asset_id,
      )

      if (existingCryptoIndex !== -1) {
        // Send PUT request to update existing crypto in wallet
        await fetch(`http://localhost:5000/wallet/${existingCryptoIndex + 1}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedCrypto),
        })
      } else {
        // Send POST request to add new crypto to wallet
        await fetch('http://localhost:5000/wallet', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newCryptoToWallet),
        })
      }

      reloadWalletCryptos()
      closeModal()
    } catch (error) {
      console.error('Error adding/updating crypto in wallet:', error)
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
          name="asset_id"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose Crypto" />
                </SelectTrigger>
                <SelectContent>
                  {cryptos.map((crypto) => (
                    <SelectItem key={crypto.asset_id} value={crypto.asset_id}>
                      <div className="flex items-center gap-2">
                        <Image
                          src={crypto.icon_url ?? ''}
                          alt=""
                          width={16}
                          height={16}
                        />
                        <p className="text-sm leading-4">
                          {crypto.name}{' '}
                          <span className="text-sm leading-4 text-secondary-500">
                            {crypto.asset_id}
                          </span>
                        </p>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <Input
          type="number"
          name="quantity"
          placeholder="0,00"
          className="pl-4 placeholder:text-gray-400 text-gray-400"
        />
        <Button type="submit" className="w-full py-[0.875rem] px-[1.5rem] h-10">
          Add Crypto
        </Button>
      </form>
    </Form>
  )
}
