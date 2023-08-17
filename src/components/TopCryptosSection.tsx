'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { formatCurrency } from '@/utils/formatCurrency'
import { truncateNumberToFixedDecimals } from '@/utils/truncateNumberToFixedDecimals'
import { useState } from 'react'
import { CryptoProfile } from './CryptoProfile'
import { Button } from './ui/button'

export function TopCryptosSection() {
  const [numberOfTableRows, setNumberOfTableRows] = useState<number>(4)

  function handleViewMoreOrLessButton() {
    setNumberOfTableRows((prev) => (prev === 4 ? Infinity : 4))
  }

  const fakeCryptos = [
    {
      asset_id: 'aaaaa',
      name: 'coin',
      icon_url:
        'https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_16/f231d7382689406f9a50dde841418c64.png',
      price_change: 0.00252,
      price_usd: 2,
    },
  ]

  return (
    <>
      <h3 className="text-center font-bold text-[2rem] max-md:text-2xl max-sm:text-xl leading-10 max-md:leading-8 mb-12 max-md:mb-10 max-sm:mb-4">
        Top Cryptos
      </h3>

      <Table className="mx-[112px] max-md:mx-[48px] max-sm:hidden">
        <TableCaption>
          <Button
            className="text-primary"
            variant="link"
            onClick={handleViewMoreOrLessButton}
          >
            {numberOfTableRows === 4 ? 'View more +' : 'View less'}
          </Button>
        </TableCaption>
        <TableHeader className="bg-white">
          <TableRow>
            <TableHead className="w-[100px] text-left">#</TableHead>
            <TableHead className="text-left">Crypto</TableHead>
            <TableHead className="text-left">Price</TableHead>
            <TableHead>Change</TableHead>
            <TableHead className="text-right pr-6">Trade</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fakeCryptos?.slice(0, numberOfTableRows).map((crypto, index) => (
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
              <TableCell className="text-left">
                {formatCurrency(crypto?.price_usd)}
              </TableCell>
              <TableCell
                className={cn(
                  crypto?.price_change > 0
                    ? 'text-terniary-700'
                    : 'text-quaternary-700',
                  'text-base text-foreground',
                )}
              >
                {Number(
                  truncateNumberToFixedDecimals(crypto?.price_change, 2),
                ) > 0
                  ? '+'
                  : ''}
                {truncateNumberToFixedDecimals(crypto?.price_change, 2)}%
              </TableCell>
              <TableCell className="flex justify-end pr-6">
                <Button className="py-2 px-10 bg-terniary-700 h-8">Buy</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Table className="mx-[24px] min-[640px]:hidden">
        <TableCaption>
          <Button
            className="text-primary"
            variant="link"
            onClick={handleViewMoreOrLessButton}
          >
            {numberOfTableRows === 4 ? 'View more +' : 'View less'}
          </Button>
        </TableCaption>
        <TableHeader>
          <TableRow className="max-sm:hidden">
            <TableHead>Crypto</TableHead>
            <TableHead>Trade</TableHead>
          </TableRow>

          <TableRow className="flex justify-between text-secondary-500 min-[640px]:hidden">
            <TableHead>Crypto</TableHead>
            <TableHead>Trade</TableHead>
          </TableRow>
        </TableHeader>
        {fakeCryptos.slice(0, numberOfTableRows).map((crypto, index) => (
          <TableBody key={crypto.asset_id.concat('y')}>
            <TableRow
              className={cn(
                index % 2 === 0 ? 'bg-secondary-100' : '',
                'max-sm:hidden',
              )}
            >
              <TableCell>
                <CryptoProfile {...crypto} />
              </TableCell>
              <TableCell>
                <Button className="py-2 px-10 bg-terniary-700">Buy</Button>
              </TableCell>
            </TableRow>

            <TableRow
              className={cn(
                index % 2 !== 0 ? 'bg-secondary-100' : '',
                'min-[640px]:hidden',
              )}
              key={crypto.asset_id}
            >
              <TableCell className="p-0">
                <Accordion type="single" collapsible>
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="px-4">
                      <CryptoProfile {...crypto} />
                    </AccordionTrigger>
                    <AccordionContent>
                      <Table className="flex justify-between">
                        <TableHeader>
                          <TableRow>
                            <TableHead className="text-left text-xs h-fit pt-4 pb-2">
                              Price
                            </TableHead>
                          </TableRow>
                          <TableRow>
                            <TableHead className="text-left text-xs h-fit pt-2 pb-4">
                              Change
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="text-right text-sm pb-2">
                              {formatCurrency(crypto.price_usd)}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="text-right text-sm pt-2">
                              {truncateNumberToFixedDecimals(
                                crypto.price_change,
                                2,
                              )}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TableCell>
            </TableRow>
          </TableBody>
        ))}
      </Table>
    </>
  )
}
