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
import useCrypto from '@/hooks/useCryptos'
import { addCryptoFormSchema } from '@/schemas/addCryptoFormSchema'
import { Crypto } from '@/types/crypto'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Input } from '../ui/input'

export function AddCryptoForm() {
  const form = useForm<z.infer<typeof addCryptoFormSchema>>({
    resolver: zodResolver(addCryptoFormSchema),
  })

  const { cryptos } = useCrypto()

  async function onSubmit(data: z.infer<typeof addCryptoFormSchema>) {
    try {
      // Prepare crypto data
      const newCrypto: Crypto = {
        type: data.type,
        quantity: data.quantity,
      }

      // Send POST request to add new crypto to wallet
      const response = await fetch('http://localhost:5000/wallet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCrypto),
      })

      if (response.ok) {
        // Successfully added a crypto to wallet, close the "Add crypto" dialog
      }
    } catch (error) {
      console.error('Error adding new crypto to wallet:', error)
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
          name="type"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue
                    placeholder="Choose Crypto"
                    {...form.register('type')}
                  />
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
          Add crypto
        </Button>
      </form>
    </Form>
  )
}
