declare global {
  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp;
    };
  }
}

export interface TelegramWebApp {
  initDataUnsafe: {
    user?: {
      id: number;
      username?: string;
    };
  };
  MainButton: {
    text: string;
    show: () => void;
    hide: () => void;
    onClick: (callback: () => void) => void;
  };
  setHeaderColor: (color: string) => void;
  ready: () => void;
} 