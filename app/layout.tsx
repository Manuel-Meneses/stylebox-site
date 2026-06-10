import { Syne, Manrope } from 'next/font/google'
import "./globals.css"
import WhatsAppButton from '@/components/whatsapp-button' // <-- Importá el botón

const syne = Syne({ 
  subsets: ['latin'], 
  variable: '--font-syne',
  display: 'swap',
})

const manrope = Manrope({ 
  subsets: ['latin'], 
  variable: '--font-manrope',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${syne.variable} ${manrope.variable} font-sans antialiased`}>
      <body>
        {/* Aquí va tu ThemeProvider y tu Navbar actual */}
        {children}
        
        {/* Componente flotante renderizado sobre todo el sitio */}
        <WhatsAppButton />
      </body>
    </html>
  )
}