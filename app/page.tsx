'use client'

import Layout from '@/src/components/ui/Layout';
import GamesList from '@/src/components/GamesList/GamesList';
import useTelegramWebApp from '@/src/hooks/useTelegramWebApp';

export default function Home() {
  return (
    <Layout>
      <GamesList />
    </Layout>
  );
}
