import { Inter } from 'next/font/google'
import { ReactNode } from 'react'; // Importando ReactNode

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Vitor Vidotto",
  description: "Portifólio Vitor Vidotto",
};

interface RootLayoutProps {
  children: ReactNode; // Tipando children
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
