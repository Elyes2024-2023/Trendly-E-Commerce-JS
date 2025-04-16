import { Inter, Poppins } from 'next/font/google'
import { Providers } from '@/components/providers'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Trendly - Where trends meet tech',
  description: 'Shop smart, shop together. AI-powered eCommerce platform with community features.',
  keywords: ['ecommerce', 'AI', 'shopping', 'community', 'trends', 'fashion'],
  authors: [{ name: 'ELYES' }],
  creator: 'ELYES',
  copyright: '© ELYES 2024-2025. All rights reserved.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-gray-50">
        <Providers>{children}</Providers>
        <footer className="py-4 text-center text-sm text-gray-500">
          © ELYES 2024-2025. All rights reserved.
        </footer>
      </body>
    </html>
  )
} 