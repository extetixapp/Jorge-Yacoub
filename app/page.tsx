'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Servicios from '../components/Servicios';
import Procedimientos from '../components/Procedimientos';
import Faq from '../components/Faq';

// Variables globales para evitar errores de alcance
const telefonoWhatsApp = '+5491122735647';
const mensajeWhatsApp = encodeURIComponent(
  'Hola, me comunico desde la web para realizar una consulta.'
);
const emailClinica = 'contacto@piesano.com';
const direccionClinica = 'Avellaneda 677, Merlo, Bs,As. Argentina';
const urlGoogleMaps = 'https://maps.app.goo.gl/gMivy66K4fSWzBWd6';

export default function Home() {
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
      <footer className="bg-white border-t border-gris-fondo pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
          {/* COLUMNA 1: INFO */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-verde-oscuro uppercase tracking-widest">
              Jorge Yacoub
            </h3>
            <p className="text-gris-carbon text-sm font-light leading-relaxed">
              Licenciado en podología y <br /> Diplomado universitario en 
              pie diabetico.
            </p>
          </div>

          {/* COLUMNA 2: CONTACTO */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-verde-claro font-medium">
              Contacto
            </h4>
            <div className="text-sm text-gris-carbon font-light space-y-3">
              <a href={urlGoogleMaps} target="_blank" rel="noreferrer" className="flex items-center justify-center md:justify-start gap-2 hover:text-verde-oscuro transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                {direccionClinica}
              </a>
              <a href={`https://wa.me/${telefonoWhatsApp.replace(/[^0-9]/g, '')}?text=${mensajeWhatsApp}`} target="_blank" rel="noreferrer" className="flex items-center justify-center md:justify-start gap-2 hover:text-verde-oscuro transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zM6.554 4.58c-.354.001-.703.048-1.047.142-.326.089-1.01.272-1.428.841-.397.534-1.218 1.189-1.218 2.735 0 1.546.82 2.196 1.157 2.656.327.447 2.155 3.336 4.908 4.605 2.196.992 2.923.774 3.738.657.815-.117 2.62-1.071 2.99-2.106.37-.999.37-1.863.262-2.046-.108-.182-.39-.29-.815-.502s-2.529-1.249-2.921-1.391c-.391-.141-.679-.214-.962.214-.282.428-1.082 1.391-1.326 1.677-.243.284-.486.319-1.248-.053-.762-.372-3.218-1.185-4.348-1.835-.613-.352-1.026-.788-1.168-1.168-.142-.381-.015-.587.167-.775.172-.178.381-.464.571-.696.19-.231.253-.393.381-.657.127-.264.064-.496-.032-.696-.096-.201-.849-2.044-1.166-2.797-.308-.737-.626-.636-.864-.647z"/></svg>
                {telefonoWhatsApp}
              </a>
              <a href={`mailto:${emailClinica}`} className="flex items-center justify-center md:justify-start gap-2 hover:text-verde-oscuro transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                {emailClinica}
              </a>
            </div>
          </div>

          {/* COLUMNA 3: LEGAL */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-verde-claro font-medium">
              Legal
            </h4>
            <div className="text-sm text-gris-carbon font-light">
              <p>© {new Date().getFullYear()} Jorge Yacoub</p>
              <p className="mt-2 text-xs">Todos los derechos reservados.</p>
            </div>
          </div>
        </div>

        {/* LÍNEA FINAL */}
        <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-gris-fondo text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gris-carbon/50">
            Diseñado para el bienestar de tus pasos
          </p>
        </div>
      </footer>
    </main>
  );
}