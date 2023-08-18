import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'

interface SolutionsCardProps {
  iconSrc: string | StaticImport
}

export function SolutionsCard({ iconSrc }: SolutionsCardProps) {
  return (
    <Card className="shadow-xl w-[280px] max-md:w-[200px] h-[268px] p-6">
      <CardHeader className="p-0">
        <Image
          className="mb-4 max-md:w-[40px] max-md:h-[40px]"
          src={iconSrc}
          width={64}
          height={64}
          alt=""
        />
        <CardDescription className="text-primary-500 font-bold">
          For your company
        </CardDescription>
        <CardTitle className="font-bold max-md:text-xl text-2xl text-foreground">
          Crypto Solutions
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0 pt-2">
        <p className="text-foreground text-sm leading-[24px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        </p>
      </CardContent>
    </Card>
  )
}
