'use client'

import ArrowRightIcon2 from '@/assets/arrow-right-2.svg'
import WavesIcon from '@/assets/waves.svg'
import { Carousel } from '@/components/Carousel'
import { Tag } from '@/components/Tag'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-[100vw] overflow-x-hidden flex flex-col items-center">
      <div className="max-[320px]:mx-[16px] max-md:mx-[48px] min-[769px]:ml-[112px] pt-[56px] min-[1440px]:pt-[160px] min-[1440px]:pb-[120px] flex">
        <div className="w-1/2 max-md:w-full flex flex-col max-md:items-center max-md:text-center">
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
          <ul className="flex gap-8 max-[320px]:gap-4 mt-20 max-[320px]:mx-[16px]">
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

        <div className="w-1/2 flex justify-end max-md:hidden">
          <Carousel />
        </div>
      </div>

      <div className="max-[1440px]:w-[1440px] w-full">
        <Image src={WavesIcon} alt="" className="w-full" />
      </div>
    </main>
  )
}
