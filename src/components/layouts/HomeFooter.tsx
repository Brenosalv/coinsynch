import LogoImg from '@/assets/logo.svg'
import WavesFooterIcon from '@/assets/waves-footer.svg'
import Image from 'next/image'
import { SubscribeForm } from '../SubscribeForm'

export function HomeFooter() {
  return (
    <footer>
      <div className="mt-[112px] max-sm:mt-[56px] bg-[linear-gradient(138deg,_#FBAB34_0%,_#AD721A_100%)] overflow-x-hidden overflow-y-hidden flex items-center justify-center relative">
        <div className="max-[1440px]:min-w-[1440px] w-full absolute z-0">
          <Image src={WavesFooterIcon} alt="" className="w-full" />
        </div>

        <div className="my-[120px] max-md:px-6 text-white flex justify-around flex-wrap w-full relative">
          <div className="max-md:mb-10">
            <h4 className="text-primary-100 font-bold text-2xl">Lorem ipsum</h4>
            <h2 className="text-white font-bold text-[2.5rem] tracking-[-0.4px] leading-[48px] mt-1 mb-4">
              Lorem ipsum
            </h2>
            <p className="max-w-[385px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
          </div>

          <SubscribeForm />
        </div>
      </div>

      <div className="flex justify-between mx-[112px] max-md:mx-12 py-6 max-md:py-6">
        <p className="text-sm max-sm:hidden">
          CopyriCopyright © 2023 - All rights reserved
        </p>

        <Image
          src={LogoImg}
          alt="Logo"
          className="max-sm:mx-auto"
          height={16}
        />
      </div>
    </footer>
  )
}
