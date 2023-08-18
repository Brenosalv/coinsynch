import { cn } from '@/lib/utils'
import { truncateNumberToFixedDecimals } from './truncateNumberToFixedDecimals'

export function getPriceChangeStyles(priceChange: number) {
  return cn(
    truncateNumberToFixedDecimals(priceChange) > 0 && 'text-terniary-700',
    truncateNumberToFixedDecimals(priceChange) < 0 && 'text-quaternary-700',
    truncateNumberToFixedDecimals(priceChange) === 0 && 'text-foreground',
  )
}
