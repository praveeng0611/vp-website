import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Dr. Vikas Prasad — Author & Negotiation Expert',
  description:
    'Official website of Dr. Vikas Prasad, author of The Negotiation Code: Beyond the Table. Two decades of boardroom experience distilled into a transformative guide to human-centred negotiation.',
  keywords: 'negotiation, negotiation book, Dr Vikas Prasad, The Negotiation Code, procurement, leadership, deal-making',
  openGraph: {
    type: 'website',
    siteName: 'Dr. Vikas Prasad',
    title: 'Dr. Vikas Prasad — Author & Negotiation Expert',
    description: 'Author of The Negotiation Code: Beyond the Table. Transforming how professionals think about deals, people, and power.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
