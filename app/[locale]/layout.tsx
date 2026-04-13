import type { Metadata } from 'next'
import { Inter, Space_Mono, Syne } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import '../globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://nahuelgl-portfolio.vercel.app'),
  title: {
    default: 'Nahuel González — Frontend Engineer & Data Analyst',
    template: '%s | Nahuel González',
  },
  description:
    'Frontend Engineer and Data Analyst with 15+ years of corporate experience at PwC Argentina and Grupo Sancor Seguros. Building products that connect business logic with modern interfaces.',
  keywords: [
    'Frontend Engineer',
    'Data Analyst',
    'React',
    'Next.js',
    'TypeScript',
    'Power BI',
    'PwC',
    'Argentina',
    'Nahuel González',
  ],
  authors: [{ name: 'Nahuel González' }],
  creator: 'Nahuel González',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nahuelgl-portfolio.vercel.app',
    title: 'Nahuel González — Frontend Engineer & Data Analyst',
    description:
      'Building products that connect business logic with modern interfaces — from corporate systems to client-facing experiences.',
    siteName: 'Nahuel González',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Nahuel González — Frontend Engineer & Data Analyst',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nahuel González — Frontend Engineer & Data Analyst',
    description: 'Building products that connect business logic with modern interfaces.',
    images: ['/og-image.png'],
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
}

const locales = ['en', 'es']

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!locales.includes(locale)) notFound()

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const messages = useMessages()

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${inter.variable} ${spaceMono.variable} ${syne.variable}`}
    >
      <body className="font-body antialiased bg-light-surface dark:bg-dark text-dark-surface dark:text-light">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
