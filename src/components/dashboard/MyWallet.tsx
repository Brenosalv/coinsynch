'use client'

import EmptyIcon from '@/assets/empty.svg'
import PlusIcon from '@/assets/plus.svg'
import TransferIcon from '@/assets/transfer.svg'
import WalletIcon from '@/assets/wallet.svg'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useWalletContext } from '@/contexts/WalletContext'
import { cn } from '@/lib/utils'
import { formatCurrency } from '@/utils/formatCurrency'
import { truncateNumberToFixedDecimals } from '@/utils/truncateNumberToFixedDecimals'
import Image from 'next/image'
import { useState } from 'react'
import { CryptoProfile } from '../CryptoProfile'
import { AddCryptoForm } from '../forms/AddCryptoForm'
import { Button } from '../ui/button'

export function MyWallet() {
  const [numberOfCards, setNumberOfCards] = useState<number>(4)

  const { walletCryptos } = useWalletContext()

  function handleViewMoreOrLessButton() {
    setNumberOfCards((prev) => (prev === 4 ? Infinity : 4))
  }

  return (
    <div className="shadow-lg max-sm:shadow-none max-sm:bg-transparent rounded-lg">
      <Separator className="bg-secondary-300" />

      <div className="flex items-center justify-between bg-white p-6 border-b border-secondary-200 max-sm:border-none max-sm:bg-gray-100 rounded-t-lg">
        <div className="flex items-center gap-4">
          <Image src={WalletIcon} alt="" className="max-sm:w-6" />
          <h4 className="font-bold text-2xl max-sm:text-xl">My Wallet</h4>
        </div>

        <Dialog>
          <DialogTrigger>
            <Button className="px-6 h-8 max-sm:h-8 max-sm:p-2.5 max-sm:text-2xl">
              <Image
                src={PlusIcon}
                alt=""
                className="text-lg leading-4 my-auto text-center"
              />
              <span className="max-sm:hidden ml-2">Add crypto</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="flex flex-col gap-[24px] p-[32px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold mx-auto max-md:text-xl max-sm:text-base">
                Add Crypto
              </DialogTitle>
            </DialogHeader>

            <AddCryptoForm />
          </DialogContent>
        </Dialog>
      </div>

      {walletCryptos?.length > 0 ? (
        <div className="text-center">
          <Table className="max-sm:hidden">
            <TableHeader className="bg-white">
              <TableRow>
                <TableHead className="w-[100px] text-left">#</TableHead>
                <TableHead className="text-left">Crypto</TableHead>
                <TableHead className="text-left">Holdings</TableHead>
                <TableHead>Change</TableHead>
                <TableHead className="text-right pr-6">Trade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {walletCryptos?.slice(0, numberOfCards).map((crypto, index) => (
                <TableRow
                  className={'even:bg-secondary-100 odd:bg-white'}
                  key={crypto?.asset_id?.concat('x')}
                >
                  <TableCell className="text-sm text-secondary-500 text-left">
                    0{index + 1}
                  </TableCell>
                  <TableCell>
                    <CryptoProfile iconSize={32} {...crypto} />
                  </TableCell>
                  <TableCell className="text-left flex flex-col">
                    {formatCurrency(crypto?.price_usd * crypto.quantity)}
                    <p className="text-xs leading-[0.875rem] text-primary-500">
                      {crypto.quantity} <span>{crypto.asset_id}</span>
                    </p>
                  </TableCell>
                  <TableCell
                    className={cn(
                      truncateNumberToFixedDecimals(crypto?.price_change) > 0 &&
                      'text-terniary-700',
                      truncateNumberToFixedDecimals(crypto?.price_change) < 0 &&
                      'text-quaternary-700',
                      truncateNumberToFixedDecimals(crypto?.price_change) ===
                      0 && 'text-foreground',
                    )}
                  >
                    {truncateNumberToFixedDecimals(crypto?.price_change) > 0
                      ? '+'
                      : ''}
                    {truncateNumberToFixedDecimals(crypto?.price_change, 2)}%
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    <Button variant="ghost" className="px-10 p-0">
                      <Image src={TransferIcon} alt="" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="grid grid-cols-2 gap-4 sm:hidden">
            {walletCryptos?.slice(0, numberOfCards).map((crypto) => (
              <Card key={crypto.asset_id} className="shadow-lg border-none">
                <CardHeader className="bg-primary-100 rounded-t-lg max-sm:p-5">
                  <CardTitle>
                    <CryptoProfile {...crypto} />
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="text-left flex flex-col space-y-1">
                    <span className="text-secondary-500 text-xs">Holdings</span>
                    <span className="text-sm text-foreground">
                      {formatCurrency(crypto?.price_usd * crypto.quantity)}
                    </span>
                    <span className="text-xs leading-[0.875rem] text-primary-500">
                      {crypto.quantity} <span>{crypto.asset_id}</span>
                    </span>
                  </div>

                  <Separator className="my-4 bg-secondary-200" />

                  <div className="flex flex-col text-left">
                    <span className="text-sm text-secondary-500">Change</span>
                    <span
                      className={cn(
                        truncateNumberToFixedDecimals(crypto?.price_change) >
                        0 && 'text-terniary-700',
                        truncateNumberToFixedDecimals(crypto?.price_change) <
                        0 && 'text-quaternary-700',
                        truncateNumberToFixedDecimals(crypto?.price_change) ===
                        0 && 'text-foreground',
                      )}
                    >
                      {truncateNumberToFixedDecimals(crypto?.price_change) > 0
                        ? '+'
                        : ''}
                      {truncateNumberToFixedDecimals(crypto?.price_change)}%
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full h-8">Trade</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <Button
            className="text-primary ml-auto mt-6 sm:hidden"
            variant="link"
            onClick={handleViewMoreOrLessButton}
          >
            View more +
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center bg-white py-20 max-sm:py-10 max-sm:shadow-lg max-sm:rounded-lg rounded-b-lg">
          <Image src={EmptyIcon} alt="" />
          <h5 className="mt-6 mb-2 font-bold text-xl">Nothing here yet...</h5>
          <p className="text-sm">Add a crypto and start earning</p>
        </div>
      )}
    </div>
  )
}
