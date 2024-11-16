import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { AppProviders } from '@/src/providers/AppProviders'
import { Web3Providers } from '@/src/providers/Web3Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prediction Market',
  description: 'Your description here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppProviders>
          <Web3Providers>
            {children}
          </Web3Providers>
        </AppProviders>
      </body>
    </html>
  )
}
