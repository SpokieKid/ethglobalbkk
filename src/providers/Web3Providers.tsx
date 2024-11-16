'use client'

import { createConfig, WagmiProvider } from 'wagmi'
import { ReactNode } from 'react'
import { http } from 'viem'
import { polygonMumbai } from 'viem/chains'

const config = createConfig({
  chains: [polygonMumbai],
  transports: {
    [polygonMumbai.id]: http()
  }
})

interface Web3ProvidersProps {
  children: ReactNode
}

export function Web3Providers({ children }: Web3ProvidersProps) {
  return (
    <WagmiProvider config={config}>
      {children}
    </WagmiProvider>
  )
}