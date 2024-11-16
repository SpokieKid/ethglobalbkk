declare global {
  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp;
    }
  }
}

export interface TelegramWebApp {
  ready(): void;
  close(): void;
  expand(): void;
  MainButton: {
    text: string;
    color: string;
    textColor: string;
    isVisible: boolean;
    isActive: boolean;
    show(): void;
    hide(): void;
    onClick(fn: Function): void;
    offClick(fn: Function): void;
    enable(): void;
    disable(): void;
  };
  initDataUnsafe: {
    user?: {
      id: number;
      first_name: string;
      last_name?: string;
      username?: string;
      language_code?: string;
    };
    query_id?: string;
    auth_date?: string;
    hash?: string;
  };
  setHeaderColor(color: string): void;
  backgroundColor: string;
}

export type { TelegramWebApp }; 