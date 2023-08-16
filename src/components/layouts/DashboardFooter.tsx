import LogoImg from '@/assets/logo.svg'
import Image from 'next/image'

export function DashboardFooter() {
  return (
    <footer className="flex justify-between max-md:px-12 py-6 max-md:py-6">
      <p className="text-sm max-md:mx-auto md:mx-auto">
        CopyriCopyright © 2023 - All rights reserved
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
