import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Loader2 } from 'lucide-react';
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Desafío Frontend',
  description: 'Formulario de solicitud de empleo multi-paso',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen">
            <Loader2 className="h-12 w-12 animate-spin text-green-600" />
          </div>
        }>
          {children}
        </Suspense>
      </body>
    </html>
  );
}