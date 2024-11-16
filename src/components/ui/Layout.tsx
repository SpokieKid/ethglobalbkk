import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <main className="min-h-screen bg-gray-50">
      {children}
    </main>
  );
} 