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
import { useState } from 'react'
import { Button } from './ui/button'

const invoices = [
  {
    id: '01',
    crypto: 'Bitcoin',
    price: 'US$25.499,52',
    change: '+5,65%',
  },
  {
    id: '02',
    crypto: 'Ethereum',
    price: 'US$25.499,52',
    change: '-5,65%',
  },
  {
    id: '03',
    crypto: 'Cardano',
    price: 'US$25.499,52',
    change: '-5,65%',
  },
  {
    id: '04',
    crypto: 'Solana',
    price: 'US$25.499,52',
    change: '-5,65%',
  },
  {
    id: '05',
    crypto: 'Solana',
    price: 'US$25.499,52',
    change: '-5,65%',
  },
  {
    id: '06',
    crypto: 'Solana',
    price: 'US$25.499,52',
    change: '-5,65%',
  },
  {
    id: '07',
    crypto: 'Solana',
    price: 'US$25.499,52',
    change: '-5,65%',
  },
  {
    id: '08',
    crypto: 'Solana',
    price: 'US$25.499,52',
    change: '-5,65%',
  },
  {
    id: '09',
    crypto: 'Solana',
    price: 'US$25.499,52',
    change: '-5,65%',
  },
  {
    id: '10',
    crypto: 'Solana',
    price: 'US$25.499,52',
    change: '-5,65%',
  },
]

export function TopCryptosTable() {
  const [numberOfTableRows, setNumberOfTableRows] = useState<number>(4)

  function handleViewMoreOrLessButton() {
    setNumberOfTableRows((prev) => (prev === 4 ? Infinity : 4))
  }

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
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">#</TableHead>
            <TableHead>Crypto</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Change</TableHead>
            <TableHead>Trade</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.slice(0, numberOfTableRows).map((invoice, index) => (
            <TableRow
              className={index % 2 === 0 ? 'bg-secondary-100' : ''}
              key={invoice.id.concat('x')}
            >
              <TableCell className="text-sm text-secondary-500">
                {invoice.id}
              </TableCell>
              <TableCell>{invoice.crypto}</TableCell>
              <TableCell>{invoice.price}</TableCell>
              <TableCell>{invoice.change}</TableCell>
              <TableCell>
                <Button className="py-2 px-10 bg-terniary-700">Buy</Button>
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
        {invoices.slice(0, numberOfTableRows).map((invoice, index) => (
          <TableBody key={invoice.id.concat('y')}>
            <TableRow
              className={cn(
                index % 2 === 0 ? 'bg-secondary-100' : '',
                'max-sm:hidden',
              )}
            >
              <TableCell>{invoice.crypto}</TableCell>
              <TableCell>
                <Button className="py-2 px-10 bg-terniary-700">Buy</Button>
              </TableCell>
            </TableRow>

            <TableRow
              className={cn(
                index % 2 !== 0 ? 'bg-secondary-100' : '',
                'min-[640px]:hidden',
              )}
              key={invoice.id}
            >
              <TableCell className="p-0">
                <Accordion type="single" collapsible>
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="px-4">
                      {invoice.crypto}
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
                              US$ 25.499,52
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="text-right text-sm pt-2">
                              +5,65%
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
