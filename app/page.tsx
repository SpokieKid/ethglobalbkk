'use client'

import { useTelegramWebApp } from '@/src/hooks/useTelegramWebApp'
import { Layout } from '@/src/components/ui/Layout'
import GamesList from '@/src/components/GamesList/GamesList'
import { useEffect } from 'react'
import type { TelegramWebApp } from '@/src/types/telegram'

export default function Home() {
  const webApp = useTelegramWebApp()

  useEffect(() => {
    if (webApp) {
      // 设置主题颜色
      webApp.setHeaderColor('#ffffff')
      
      if (webApp.initDataUnsafe.user) {
        console.log('User ID:', webApp.initDataUnsafe.user.id)
        console.log('Username:', webApp.initDataUnsafe.user.username)
      }

      // 设置主按钮
      webApp.MainButton.text = "Place Prediction"
      webApp.MainButton.onClick(() => {
        console.log("Main button clicked")
      })
      webApp.MainButton.show()
    }
  }, [webApp])

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          Prediction Market
        </h1>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Upcoming Games</h2>
          <GamesList />
        </div>
      </div>
    </Layout>
  )
}
