import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Navigation from './components/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Providers>
          <Navigation/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
