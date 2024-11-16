import { useEffect, useState } from 'react'
import WebApp from '@twa-dev/sdk'

export const useTelegramWebApp = () => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // 初始化 Telegram WebApp
    WebApp.ready()
    setIsReady(true)
  }, [])

  return {
    isReady,
    webApp: WebApp
  }
}

export default useTelegramWebApp 