import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vaibhav Sharma | Software Developer',
  description:
    'Portfolio of Vaibhav Sharma — BTech Computer Science student, software developer, and hackathon finalist.',

  metadataBase: new URL('https://vaibhavsh0120.vercel.app'),

  openGraph: {
    title: 'Vaibhav Sharma | Software Developer',
    description: 'BTech CSE student • Software Developer • Hackathon Finalist',
    url: 'https://vaibhavsh0120.vercel.app/',
    siteName: 'Vaibhav Sharma Portfolio',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Vaibhav Sharma Portfolio',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Vaibhav Sharma | Software Developer',
    description:
      'Portfolio of Vaibhav Sharma — BTech CSE student & software developer',
    images: ['/api/og'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SpeedInsights />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
