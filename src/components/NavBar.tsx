import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Image from 'next/image'
import LogoImg from '../assets/logo.svg'
import MenuIcon from '../assets/menu.svg'
import { Button } from './ui/button'
import { Link } from './ui/link'

export function NavBar() {
  return (
    <nav className="flex-col">
      <div className="mx-[112px] max-sm:mx-[16px] max-md:mx-[48px] py-[11px] flex items-center justify-between">
        <Link href="#">
          <Image src={LogoImg} alt="Logo" height={21} />
        </Link>

        <div className="flex gap-[24px] ml-[40px] mr-auto max-sm:hidden">
          <Link href="#">About us</Link>
          <Link href="#">Top Cryptos</Link>
        </div>

        <div className="flex items-center gap-[80px]">
          <div className="pl-[16px] flex gap-[8px] max-[1024px]:hidden">
            <span className="text-sm text-secondary">BIT</span>
            <span className="text-sm text-foreground">R$23,62</span>
            <span className="text-sm text-constructive">+7,082</span>
          </div>

          <div className="flex gap-[24px] max-sm:hidden">
            <Button variant="link" className="p-0">
              Sign in
            </Button>
            <Button className="py-[8px] px-[16px]">
              <span className="mx-[17px]">Sign up</span>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger className="min-[640px]:hidden">
              <Image src={MenuIcon} alt="Menu" width={24} height={24} />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-8 items-end pt-8">
                <Link href="#">About us</Link>
                <Link href="#">Top Cryptos</Link>
                <Link href="#">Sign in</Link>
                <Link href="#">Sign up</Link>
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
