import './globals.css'
import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  title: 'Beth G — Executive Virtual Assistant',
  description: 'Strategic executive support for founders, consultants, and growing businesses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}