import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'

const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-ibm',
})

export const metadata: Metadata = {
  title: 'けんしん | Web Designer',
  description: '好きなことで生きるために、デザインしています。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={ibmPlex.variable}>
      <body>
        <Nav />
        <main className="fade-up">{children}</main>
      </body>
    </html>
  )
}
