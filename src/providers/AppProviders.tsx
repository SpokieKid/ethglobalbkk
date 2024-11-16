import { FC, ReactNode } from 'react';
import { WagmiProvider } from 'wagmi';
import { QueryClientProvider } from '@tanstack/react-query';
import { AzuroSDKProvider } from '@azuro-org/sdk';
import ErrorBoundary from '../components/ErrorBoundary';
import { polygonMumbai } from 'wagmi/chains';
// import { OddsViewProvider } from '../contexts/oddsView';

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders: FC<AppProvidersProps> = ({ children }) => {
  return (
    <ErrorBoundary>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <AzuroSDKProvider initialChainId={polygonMumbai.id}>
            <OddsViewProvider>
              {children}
            </OddsViewProvider>
          </AzuroSDKProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ErrorBoundary>
  );
}; 