'use client'

import ArrowRightIcon2 from '@/assets/arrow-right-2.svg'
import { Carousel } from '@/components/Carousel'
import { Tag } from '@/components/Tag'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="ml-[112px] max-sm:ml-[16px] max-md:ml-[48px] pt-[160px] pb-[120px] flex">
      <div className="w-1/2">
        <h1 className="font-bold leading-[56px] text-[3rem] tracking-[-0.48px] text-primary">
          Lorem ipsum dolor sit amet, consectetur
        </h1>
        <h2 className="mt-6 mb-8 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </h2>
        <Button className="w-[230px] flex gap-2.5">
          SIGN UP NOW <Image src={ArrowRightIcon2} alt="" />
        </Button>
        <ul className="flex gap-8 mt-20">
          <li>
            <Tag name="Cryptos" />
          </li>
          <li>
            <Tag name="NFTs" />
          </li>
          <li>
            <Tag name="Games" />
          </li>
        </ul>
      </div>

      <div className="w-1/2 flex justify-end">
        <Carousel />
      </div>
    </main>
  )
}
