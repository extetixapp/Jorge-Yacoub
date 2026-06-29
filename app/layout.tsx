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
  title: 'Jorge Yacoub Licenciado en podologia',
  description: 'Diplomado en Pie Diabético, Ortopedia y Podología Clínica.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable}`}>
      {/* 
        Aplicamos:
        bg-fondo-claro: El nuevo fondo neutro profesional
        text-gris-carbon: El nuevo color de texto que reemplaza al azul anterior
      */}
      <body className="bg-[rgb(var(--background-start-rgb))] text-[#374151] antialiased">
        {children}
      </body>
    </html>
  );
}