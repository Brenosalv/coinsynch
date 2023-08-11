import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Image from 'next/image'
import Link from 'next/link'
import LogoImg from '../assets/logo.svg'
import MenuIcon from '../assets/menu.svg'
import { Button } from './ui/button'

export function NavBar() {
  return (
    <nav className="flex-col">
      <div className="mx-[112px] max-sm:mx-[16px] max-md:mx-[48px] py-[22px] flex items-center justify-between">
        <Link href="#">
          <Image src={LogoImg} alt="Logo" height={21} />
        </Link>

        <div className="flex gap-[24px] ml-[40px] mr-auto max-sm:hidden">
          <Link
            href="#"
            className="text-sm leading-4 text-foreground underline-offset-4 hover:underline"
          >
            About us
          </Link>
          <Link
            href="#"
            className="text-sm leading-4 text-foreground underline-offset-4 hover:underline"
          >
            Top Cryptos
          </Link>
        </div>

        <div className="flex items-center gap-[80px]">
          <div className="pl-[16px] flex gap-[8px] max-[1024px]:hidden">
            <span className="text-sm text-secondary">BIT</span>
            <span className="text-sm text-foreground">R$23,62</span>
            <span className="text-sm text-constructive">+7,082</span>
          </div>

          <div className="flex gap-[24px] max-sm:hidden">
            <Button variant="link">Sign in</Button>
            <Button className="w-[100px]">Sign up</Button>
          </div>

          <Sheet>
            <SheetTrigger className="min-[640px]:hidden">
              <Image src={MenuIcon} alt="Menu" width={24} height={24} />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-8 items-end pt-8">
                <Link
                  href="#"
                  className="text-lg leading-4 text-foreground underline-offset-4 hover:underline"
                >
                  About us
                </Link>
                <Link
                  href="#"
                  className="text-lg leading-4 text-foreground underline-offset-4 hover:underline"
                >
                  Top Cryptos
                </Link>
                <Link
                  href="#"
                  className="text-lg leading-4 text-foreground underline-offset-4 hover:underline"
                >
                  Sign in
                </Link>
                <Link
                  href="#"
                  className="text-lg leading-4 text-foreground underline-offset-4 hover:underline"
                >
                  Sign up
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="pl-[8px] py-[5px] flex gap-[8px] items-center justify-center w-full shadow-lg border-t border-secondary-200 min-[1024px]:hidden">
        <span className="text-sm text-secondary">BIT</span>
        <span className="text-sm text-foreground">R$23,62</span>
        <span className="text-sm text-constructive">+7,082</span>
      </div>
    </nav>
  )
}
