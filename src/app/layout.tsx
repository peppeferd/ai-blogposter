'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import Navbar from '@/components/nav/Navbar'
import Sidebar from '@/components/nav/Sidebar'
import { RecoilRoot } from 'recoil'
const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'AI Blog Writer',
  description: 'AI Blog Writer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <UserProvider>
        <RecoilRoot>
          <body className="bg-gray-50 w-full h-screen overflow-clip flex flex-col">
            <Navbar />
            <main className="w-full h-full flex flex-col md:flex-row">
              <Sidebar />
              <div className="w-full md:pr-32 overflow-auto">{children}</div>
            </main>
          </body>
        </RecoilRoot>
      </UserProvider>
    </html>
  )
}
