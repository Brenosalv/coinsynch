import { truncateNumberToFixedDecimals } from './truncateNumberToFixedDecimals'

export function getFormattedPriceChange(priceChange: number) {
  if (truncateNumberToFixedDecimals(priceChange) > 0) {
    return '+' + truncateNumberToFixedDecimals(priceChange).toString() + '%'
  } else {
    return '' + truncateNumberToFixedDecimals(priceChange).toString() + '%'
  }
}
