'use client'

import { CryptoType } from '@/types/crypto'
import React, { createContext, useContext, useEffect, useState } from 'react'

interface WalletContextType {
  walletCryptos: CryptoType[]
  reloadWalletCryptos: () => void
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

export function useWalletContext() {
  const context = useContext(WalletContext)
  if (!context) {
    throw new Error('useWalletContext must be used within a WalletProvider')
  }
  return context
}

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [walletCryptos, setWalletCryptos] = useState<CryptoType[]>([])
  const [shouldReloadWallet, setShouldReloadWallet] = useState(false)

  useEffect(() => {
    async function fetchWallet() {
      const response = await fetch('http://localhost:5000/wallet')
      const data: CryptoType[] = await response.json()
      setWalletCryptos(data)
    }

    fetchWallet()
  }, [shouldReloadWallet])

  function reloadWalletCryptos() {
    setShouldReloadWallet((prev) => !prev)
  }

  return (
    <WalletContext.Provider
      value={{
        walletCryptos,
        reloadWalletCryptos,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}
