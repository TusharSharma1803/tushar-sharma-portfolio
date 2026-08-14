import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
// import AIChatWidget from '@/components/AIChatWidget'
import { Providers } from './providers'
import './globals.css'
import './portfolio.css'

export const metadata: Metadata = {
  title: 'Tushar Sharma — Software Developer',
  description: 'Full-stack software developer passionate about building exceptional digital experiences.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0d1117' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-adsense-account" content="ca-pub-1873488560195503"></meta>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="preload"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#0d1117] text-[#e6f1ff]">
        <Providers>
          <div className="site-shell">
            {children}
            {/* <AIChatWidget /> */}
            {process.env.NODE_ENV === 'production' && <Analytics />}
          </div>
        </Providers>
      </body>
    </html>
  )
}
