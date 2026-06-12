import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

// Configuramos las dos fuentes que acordamos
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata = {
  title: 'Pie Sano - Clínica Podológica Premium',
  description: 'Especialista en Pie Diabético, Ortopedia y Podología Clínica.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-white text-[#1B4D8F] antialiased">{children}</body>
    </html>
  );
}
