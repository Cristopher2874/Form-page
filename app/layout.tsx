import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Loader2 } from 'lucide-react';
import { Suspense } from 'react'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Front Form',
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
          <main className="bg-white p-4 w-full flex justify-between flex-col items-center min-h-screen">

            {/* Header */}
            <header className="flex items-center justify-between px-8 py-4 bg-white flex-shrink-0 w-full sticky top-0 z-50">
              {/* Logo */}
              <div className="text-2xl font-bold text-green-600">
                <Link href="/">
                  <span className="italic">Example</span>
                  <span className="font-serif">Form</span>
                </Link>
              </div>

              {/* Menu */}
              <nav className="space-x-8 text-sm text-gray-800 w-2/3 justify-between">
                <Link href="/pages/Soluciones" className="text-lg underline-none font-bold hover:underline decoration-solid">Soluciones</Link>
                <Link href="/pages/Productos" className="text-lg underline-none font-bold hover:underline decoration-solid">Productos</Link>
                <Link href="/pages/Funciones" className="text-lg underline-none font-bold hover:underline decoration-solid">Funciones</Link>
                <Link href="/pages/Historias" className="text-lg underline-none font-bold hover:underline decoration-solid">Historias</Link>
                <Link href="/pages/Form" className="text-lg underline-none font-bold hover:underline decoration-solid">Form</Link>
                <Link href="/pages/Readme/" className="text-lg underline-none font-bold hover:underline decoration-solid">README</Link>
              </nav>

              {/* Button */}
              <button className="px-6 py-2 text-white bg-gradient-to-r from-green-400 to-green-600 rounded-full hover:from-green-500 hover:to-green-700 focus:outline-none">
                Iniciar Sesión
              </button>
            </header>

            {/*FORM PAGES CHALLENGE (re-routed for children elemets and recycle)*/}
            <section className="p-2 w-5/6 flex justify-center items-center overflow-y-auto">
              <Suspense fallback={
                <div className="flex items-center justify-center min-h-screen">
                  <Loader2 className="h-12 w-12 animate-spin text-green-600" />
                </div>
              }>
                {children}
              </Suspense>
            </section>

            {/* Footer */}
            <footer className='justify-start items-center flex-shrink-0 w-full bg-white p-4 mt-auto'>
              <p className='text-gray-400 text-sm'>© 2024 MainDev | All Rights Reserved</p>
            </footer>
          </main>
        </Suspense>
      </body>
    </html>
  );
}