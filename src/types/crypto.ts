export interface CryptoType {
  asset_id: string
  name: string
  icon_url?: string
  price_usd: number
  price_change: number
  quantity: number
}

export interface AddCryptoType extends CryptoType {
  type: string
  quantity: number
}
