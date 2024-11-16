import { useEffect, useState } from 'react'
import type { TelegramWebApp } from '@/src/types/telegram'

export function useTelegramWebApp() {
  const [webApp, setWebApp] = useState<TelegramWebApp | null>(null)

  useEffect(() => {
    // 确保只在客户端执行
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      const tgApp = window.Telegram.WebApp
      // 通知 Telegram WebApp 准备就绪
      tgApp.ready()
      setWebApp(tgApp)
    }
  }, [])

  return webApp
} 