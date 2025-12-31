import type { Metadata } from 'next'
import { Inter, Cairo } from 'next/font/google'
import './globals.css'
import { Analytics } from '@/components/Analytics'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cairo = Cairo({ subsets: ['arabic'], variable: '--font-cairo' })

export const metadata: Metadata = {
  title: 'Accez.cloud - Smart Property Management SaaS Platform',
  description: 'Unified property management platform with 400+ channel integration, automated rent collection, maintenance scheduling, and marketplace services. Generate 15-30% additional revenue.',
  keywords: ['property management', 'vacation rental', 'Airbnb management', 'booking management', 'rent collection', 'property software', 'SaaS', 'HOA management'],
  authors: [{ name: 'Accez.cloud' }],
  icons: {
    icon: '/images/accez-logo.png',
    shortcut: '/images/accez-logo.png',
    apple: '/images/accez-logo.png',
  },
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <Analytics />
      </head>
      <body className={`${inter.variable} ${cairo.variable} font-sans`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
