import type { Metadata } from 'next'
import { Inter, Cairo } from 'next/font/google'
import './globals.css'
import { Analytics } from '@/components/Analytics'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cairo = Cairo({ subsets: ['arabic'], variable: '--font-cairo' })

export const metadata: Metadata = {
  title: {
    default: 'Accez | Smart Property Management Platform - Accez Cloud',
    template: '%s | Accez Cloud',
  },
  description: 'Accez is the smart property management platform with 400+ channel integrations, automated rent collection, maintenance scheduling, and marketplace services. Accez Cloud helps property managers generate 15-30% additional revenue.',
  keywords: ['Accez', 'Accez Cloud', 'Accez property management', 'property management', 'vacation rental', 'Airbnb management', 'booking management', 'rent collection', 'property software', 'SaaS', 'HOA management'],
  authors: [{ name: 'Accez Cloud' }],
  creator: 'Accez Cloud',
  publisher: 'Accez Cloud',
  metadataBase: new URL('https://accez.cloud'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/images/accez-logo.png',
    shortcut: '/images/accez-logo.png',
    apple: '/images/accez-logo.png',
  },
  openGraph: {
    title: 'Accez | Smart Property Management Platform',
    description: 'Accez Cloud - Streamline property operations with 400+ channel integrations, automated rent collection, and revenue-generating marketplace.',
    type: 'website',
    siteName: 'Accez Cloud',
    url: 'https://accez.cloud',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accez | Smart Property Management Platform',
    description: 'Accez Cloud - Smart property management with 400+ channel integrations and automated operations.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'G-GBPD3L2X7T',
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
