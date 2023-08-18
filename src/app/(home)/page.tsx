'use client'

import ArrowRightIcon2 from '@/assets/arrow-right-2.svg'
import BitcoinIcon from '@/assets/bitcoin.svg'
import CircleIcon from '@/assets/circle.svg'
import GraphicIcon from '@/assets/graphic.svg'
import LaptopIcon from '@/assets/laptop.svg'
import WavesHomepageBackgroundImage from '@/assets/waves-homepage-background-image.svg'
import { Carousel } from '@/components/homepage/Carousel'
import { SolutionsCard } from '@/components/homepage/SolutionsCard'
import { Tag } from '@/components/homepage/Tag'
import { TopCryptosSection } from '@/components/homepage/TopCryptosSection'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { openSignUpModal } from '@/utils/openSignUpModal'
import { Roboto } from 'next/font/google'
import Image from 'next/image'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export default function Home() {
  return (
    <main
      className={cn(
        roboto.className,
        'overflow-x-hidden overflow-y-hidden flex flex-col items-center',
      )}
    >
      <div className="max-[320px]:mx-[16px] max-md:mx-[48px] min-[769px]:ml-[112px] pt-[56px] min-[1440px]:pt-[160px] min-[1440px]:pb-[120px] flex">
        <div className="w-1/2 max-md:w-full flex flex-col max-md:items-center max-md:text-center">
          <h1 className="font-bold leading-[56px] text-[3rem] tracking-[-0.48px] text-primary">
            Lorem ipsum dolor sit amet, consectetur
          </h1>
          <h5 className="mt-6 mb-8 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </h5>
          <Button
            className="w-[230px] flex gap-2.5 h-10"
            onClick={openSignUpModal}
          >
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
        <Image src={WavesHomepageBackgroundImage} alt="" className="w-full" />
      </div>

      <div className="w-full min-[1060px]:ml-[112px] flex flex-wrap-reverse gap-8 items-center justify-center bg-gradient-to-b from-transparent via-transparent to-gray-100 mb-[120px] max-md:my-[80px] max-sm:my-[56px]">
        <div className="flex min-[768px]:flex-col max-md:gap-4 gap-8 max-md:overflow-x-auto max-md:pl-6 max-md:scroll-smooth max-md:will-change-scroll max-md:scrollbar-hide max-md:pb-[56px] pb-[130px]">
          <div className="flex max-md:gap-4 gap-8">
            <SolutionsCard iconSrc={BitcoinIcon} />
            <SolutionsCard iconSrc={CircleIcon} />
          </div>
          <div className="flex max-md:gap-4 gap-8 min-[768px]:ml-[104px]">
            <SolutionsCard iconSrc={GraphicIcon} />
            <SolutionsCard iconSrc={LaptopIcon} />
          </div>
        </div>

        <div className="w-[496px] max-md:mx-6">
          <h5 className="text-primary-500 font-bold max-[768px]:text-[1rem] text-[1.25rem] leading-[32px]">
            Lorem ipsum
          </h5>
          <h2 className="font-bold max-[768px]:text-[2rem] text-[2.5rem] text-foreground leading-[48px]">
            Lorem ipsum
          </h2>
          <p className="text-foreground text-[1rem] leading-[24px] px-0 pt-[16px] min-[768px]:pb-[40px] min-[1224px]:mr-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>

          <Button
            className="py-[14px] px-[24px] max-[1224px]:hidden h-10"
            onClick={openSignUpModal}
          >
            Sign up now
          </Button>
        </div>
      </div>

      <TopCryptosSection />
    </main>
  )
}
