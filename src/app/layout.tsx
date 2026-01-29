import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OPCG Gallery - ONE PIECE Card Game',
  description: 'A comprehensive gallery and price tracker for ONE PIECE Card Game',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className="dark">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}
