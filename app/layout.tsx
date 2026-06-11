import type { Metadata, Viewport } from 'next'
import './globals.css'
import { SessionProvider } from '@/components/SessionProvider'
import { OnlineSync } from '@/components/OnlineSync'

export const metadata: Metadata = {
  title: 'SiteSync - Construction Verification',
  description: 'AI-powered construction progress verification platform',
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#00b377',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          {children}
          <OnlineSync />
        </SessionProvider>
      </body>
    </html>
  )
}
