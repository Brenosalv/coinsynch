'use client'

import { CryptoType } from '@/types/crypto'
import React, { createContext, useContext, useEffect, useState } from 'react'

interface ApiCryptoContextType {
  cryptos: CryptoType[]
  isLoading: boolean
}

const ApiCryptoContext = createContext<ApiCryptoContextType | undefined>(
  undefined,
)

export function useApiCryptoContext() {
  const context = useContext(ApiCryptoContext)
  if (!context) {
    throw new Error(
      'useApiCryptoContext must be used within an ApiCryptoProvider',
    )
  }
  return context
}

export function ApiCryptoProvider({ children }: { children: React.ReactNode }) {
  const [cryptos, setCryptos] = useState<CryptoType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const topCryptos = 'BTC;ETH;ADA;XRP;XLM;DOGE;DOT;LTC;LINK;BCH'

  useEffect(() => {
    async function fetchCryptoTypes() {
      try {
        const response = await fetch(
          `https://rest.coinapi.io/v1/assets?filter_asset_id=${topCryptos}&limit=10`,
          {
            headers: {
              'X-CoinAPI-Key': process.env.NEXT_PUBLIC_COIN_API_KEY || '',
            },
          },
        )

        if (!response.ok) {
          throw new Error('Failed to fetch crypto types')
        }

        const data: CryptoType[] = await response.json()

        const iconsResponse = await fetch(
          'https://rest.coinapi.io/v1/assets/icons/32',
          {
            headers: {
              'X-CoinAPI-Key': process.env.NEXT_PUBLIC_COIN_API_KEY || '',
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

        const updatedData: CryptoType[] = []

        for (const crypto of data) {
          const exchangeRateResponse = await fetch(
            `https://rest.coinapi.io/v1/exchangerate/${crypto.asset_id}/USD`,
            {
              headers: {
                'X-CoinAPI-Key': process.env.NEXT_PUBLIC_COIN_API_KEY || '',
              },
            },
          )

          if (!exchangeRateResponse.ok) {
            console.error('Failed to fetch exchange rate')
            continue
          }

          const exchangeRateData: { rate: number } =
            await exchangeRateResponse.json()

          const changePercentage =
            ((exchangeRateData.rate - crypto.price_usd) / crypto.price_usd) *
            100

          updatedData.push({
            ...crypto,
            icon_url: iconMap[crypto.asset_id],
            price_change: changePercentage,
          })
        }

        setCryptos(updatedData)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
        setIsLoading(false)
      }
    }

    // fetchCryptoTypes()
  }, [])

  return (
    <ApiCryptoContext.Provider
      value={{
        cryptos,
        isLoading,
      }}
    >
      {children}
    </ApiCryptoContext.Provider>
  )
}
