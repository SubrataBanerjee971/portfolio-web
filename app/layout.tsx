import type { Metadata, Viewport } from 'next'
import { Poppins, JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

const roxaine = localFont({
  src: '../public/fonts/RoxaineSerif_PERSONAL_USE_ONLY.otf',
  variable: '--font-roxaine',
})

export const metadata: Metadata = {
  title: 'Subrata Banerjee | Portfolio',
  description:
    'Personal portfolio showcasing my projects, education, and work experience as a full stack developer.',
}

export const viewport: Viewport = {
  themeColor: '#111827',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${jetbrainsMono.variable} ${roxaine.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
