import { useEffect, useState } from 'react'

interface CryptoType {
  asset_id: string
  name: string
  icon_url?: string
}

function useCrypto() {
  const [cryptos, setCryptos] = useState<CryptoType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    async function fetchCryptoTypes() {
      try {
        const response = await fetch(
          'https://rest.coinapi.io/v1/assets?filter_asset_id=BTC;ETH;ADA;XRP;XLM&limit=5',
          {
            headers: {
              // I added this key directly because is a challange. In real world, I would store this key in a safe environment
              'X-CoinAPI-Key': 'D5B27709-E7F4-4DD6-A637-821B02AD0780',
            },
          },
        )

        if (!response.ok) {
          throw new Error('Failed to fetch crypto types')
        }

        const data: CryptoType[] = await response.json()

        // Fetch icons and match them with the fetched assets using asset_id
        const iconsResponse = await fetch(
          'https://rest.coinapi.io/v1/assets/icons/16',
          {
            headers: {
              // I added this key directly because is a challange. In real world, I would store this key in a safe environment
              'X-CoinAPI-Key': 'D5B27709-E7F4-4DD6-A637-821B02AD0780',
            },
          },
        )

        if (!iconsResponse.ok) {
          throw new Error('Failed to fetch icons')
        }

        const iconsData: { asset_id: string; url: string }[] =
          await iconsResponse.json()
        const iconMap: Record<string, string> = {}

        for (const icon of iconsData) {
          iconMap[icon.asset_id] = icon.url
        }

        // Add icons to each crypto type
        for (const crypto of data) {
          crypto.icon_url = iconMap[crypto.asset_id]
        }

        setCryptos(data)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
        setIsLoading(false)
      }
    }

    fetchCryptoTypes()
  }, [])

  return { cryptos, isLoading }
}

export default useCrypto
