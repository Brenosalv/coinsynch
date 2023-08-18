export function formatCurrency(
  value: number,
  currencyDisplay = 'symbol',
): string {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return formatter.format(value)
}
