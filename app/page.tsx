'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Servicios from '../components/Servicios';
import Procedimientos from '../components/Procedimientos';
import Faq from '../components/Faq';

export default function Home() {
  const telefonoWhatsApp = '+5491123456789';
  const mensajeWhatsApp = encodeURIComponent(
    'Hola, me comunico desde la web de Pie Sano para realizar una consulta.'
  );
  const emailClinica = 'contacto@piesano.com';
  const direccionClinica = 'Av. Santa Fe 1234, CABA, Argentina';
  const urlGoogleMaps = 'https://maps.google.com'; // Corregido

  return (
    <main className="relative overflow-hidden min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* SECCIÓN SERVICIOS */}
      <Servicios />

      {/* SECCIÓN PROCEDIMIENTOS */}
      <Procedimientos />

      {/* FAQ */}
      <Faq />

      {/* FOOTER PREMIUM */}
      <footer className="bg-white border-t border-gray-100 pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
          {/* COLUMNA 1: INFO */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-medicoAzul uppercase tracking-widest">
              Pie Sano
            </h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              Especialistas en podología clínica y <br /> salud integral del
              pie.
            </p>
          </div>

          {/* COLUMNA 2: CONTACTO */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-medicoTeal font-medium">
              Contacto
            </h4>
            <div className="text-sm text-gray-500 font-light space-y-2">
              <p>{direccionClinica}</p>
              <p>{emailClinica}</p>
            </div>
          </div>

          {/* COLUMNA 3: LEGAL */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-medicoTeal font-medium">
              Legal
            </h4>
            <div className="text-sm text-gray-500 font-light">
              <p>© {new Date().getFullYear()} Pie Sano</p>
              <p className="mt-2">Todos los derechos reservados.</p>
            </div>
          </div>
        </div>

        {/* LÍNEA FINAL */}
        <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-gray-50 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-300">
            Diseñado para el bienestar de tus pies
          </p>
        </div>
      </footer>
    </main>
  );
}
