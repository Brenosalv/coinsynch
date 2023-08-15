import CryptoSolutions1Icon from '@/assets/crypto-solutions-1.svg'
import CryptoSolutions2Icon from '@/assets/crypto-solutions-2.svg'
import CryptoSolutions3Icon from '@/assets/crypto-solutions-3.svg'
import CryptoSolutions4Icon from '@/assets/crypto-solutions-4.svg'
import LogoImg from '@/assets/logo.svg'
import LogoutIcon from '@/assets/logout.svg'
import MenuIcon from '@/assets/menu.svg'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Link } from '../ui/link'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'

interface DashboardHeaderProps {
  className?: string
}

export function DashboardHeader({ className }: DashboardHeaderProps) {
  return (
    <header className={cn('shadow-lg', className)}>
      <nav className="flex items-center px-[40px] max-sm:px-6 py-[22px]">
        <Sheet>
          <SheetTrigger className="min-[640px]:hidden">
            <Image src={MenuIcon} alt="Menu" width={24} height={24} />
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col gap-8 items-start pt-8">
              <Link href="#" className="flex gap-4 items-center">
                <Image src={CryptoSolutions1Icon} width={32} alt="" />
                Lorem Ipsum
              </Link>
              <Link href="#" className="flex gap-4 items-center">
                <Image src={CryptoSolutions2Icon} width={32} alt="" />
                Lorem Ipsum
              </Link>
              <Link href="#" className="flex gap-4 items-center">
                <Image src={CryptoSolutions3Icon} width={32} alt="" />
                Lorem Ipsum
              </Link>
              <Link href="#" className="flex gap-4 items-center">
                <Image src={CryptoSolutions4Icon} width={32} alt="" />
                Lorem Ipsum
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        <Link href="#" className="mx-auto min-[640px]:ml-0">
          <Image src={LogoImg} alt="Logo" height={21} className="max-sm:h-4" />
        </Link>

        <div className="flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="max-sm:p-0">
                  <Avatar className="mr-2 max-sm:w-6 max-sm:h-6">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="max-sm:hidden">Aulus</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="pr-4">
                  <NavigationMenuLink
                    href="/"
                    className="flex items-center gap-4 text-gray-500 py-4 px-6"
                  >
                    <Image src={LogoutIcon} alt="" height={16} />
                    Logout
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </header>
  )
}
