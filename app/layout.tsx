import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { WagmiProvider, createConfig, http } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AzuroSDKProvider } from '@azuro-org/sdk'
import { polygonMumbai } from 'wagmi/chains'
// import { createClient } from '@azuro-org/sdk'
import ErrorBoundary from '@/src/components/ErrorBoundary'
import ErrorComponent from '@/src/components/ErrorComponent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prediction Market',
  description: 'Your description here',
}

const queryClient = new QueryClient()
const config = createConfig({
  chains: [polygonMumbai],
  transports: {
    [polygonMumbai.id]: http()
  }
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ErrorBoundary fallback={<ErrorComponent />}>
          <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
              <AzuroSDKProvider initialChainId={polygonMumbai.id}>
                {children}
              </AzuroSDKProvider>
            </QueryClientProvider>
          </WagmiProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
