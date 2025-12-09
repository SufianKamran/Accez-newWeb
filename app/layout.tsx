import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@/components/Analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Accez.cloud - Smart Property Management SaaS Platform',
  description: 'Unified property management platform with 400+ channel integration, automated rent collection, maintenance scheduling, and marketplace services. Generate 15-30% additional revenue.',
  keywords: ['property management', 'vacation rental', 'Airbnb management', 'booking management', 'rent collection', 'property software', 'SaaS', 'HOA management'],
  authors: [{ name: 'Accez.cloud' }],
  openGraph: {
    title: 'Accez.cloud - Smart Property Management SaaS Platform',
    description: 'Streamline property operations with 400+ channel integrations, automated rent collection, and revenue-generating marketplace.',
    type: 'website',
    siteName: 'Accez.cloud',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Analytics />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
