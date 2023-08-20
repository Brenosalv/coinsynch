import LogoImg from '@/assets/logo.svg'
import Image from 'next/image'

export function DashboardFooter() {
  return (
    <footer className="flex justify-between max-md:px-8 py-6 max-md:py-6 shadow-lg">
      <p className="text-sm max-md:mx-auto md:mx-auto max-sm:text-xs">
        Copyright © 2023 - All rights reserved
      </p>

      <Image
        src={LogoImg}
        alt="Logo"
        className="max-sm:mx-auto max-sm:hidden md:hidden"
        height={16}
      />
    </footer>
  )
}
