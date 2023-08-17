export function truncateNumberToFixedDecimals(
  number: number,
  decimalPlaces = 2,
) {
  const factor = Math.pow(10, decimalPlaces)
  return Math.trunc(number * factor) / factor
}
