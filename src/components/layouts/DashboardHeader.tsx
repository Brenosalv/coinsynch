import BitcoinIcon from '@/assets/bitcoin.svg'
import CircleIcon from '@/assets/circle.svg'
import GraphicIcon from '@/assets/graphic.svg'
import LaptopIcon from '@/assets/laptop.svg'
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
import { User } from '@/types/user'
import Image from 'next/image'
import { Link } from '../ui/link'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'

export async function DashboardHeader() {
  const response = await fetch('http://localhost:5000/users?id=1')
  const users: User[] = await response.json()
  const user = users[0]

  return (
    <header className="shadow-lg bg-white">
      <nav className="flex items-center px-[40px] max-sm:px-6 py-[22px]">
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Image src={MenuIcon} alt="Menu" width={24} height={24} />
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col gap-8 items-start pt-8">
              <Link href="#" className="flex gap-4 items-center">
                <Image src={BitcoinIcon} width={32} alt="" />
                Lorem Ipsum
              </Link>
              <Link href="#" className="flex gap-4 items-center">
                <Image src={CircleIcon} width={32} alt="" />
                Lorem Ipsum
              </Link>
              <Link href="#" className="flex gap-4 items-center">
                <Image src={GraphicIcon} width={32} alt="" />
                Lorem Ipsum
              </Link>
              <Link href="#" className="flex gap-4 items-center">
                <Image src={LaptopIcon} width={32} alt="" />
                Lorem Ipsum
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        <Link href="#" className="mx-auto md:ml-0">
          <Image src={LogoImg} alt="Logo" height={21} className="max-sm:h-4" />
        </Link>

        <div className="flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="max-sm:p-0">
                  {/* There is no input for avatar in figma layout, so I kept a default Avatar */}
                  <Avatar className="mr-2 max-sm:w-6 max-sm:h-6">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="max-sm:hidden">{user.name}</span>
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
