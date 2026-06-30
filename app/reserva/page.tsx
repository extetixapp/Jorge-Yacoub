'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

function ReservaContent() {
  const searchParams = useSearchParams();
  const servicio = searchParams.get('servicio') || 'Consulta';

  useEffect(() => {
    // 1. Cargar el script de Calendly
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // 2. Escuchar el evento de reserva exitosa para redirigir sin fricción
    const handleCalendlyEvent = (e: any) => {
      if (e.data.event && e.data.event.indexOf('calendly.event_scheduled') === 0) {
        window.location.href = '/'; // Redirige al inicio tras agendar
      }
    };

    window.addEventListener('message', handleCalendlyEvent);

    // 3. Limpieza al desmontar el componente
    return () => {
      document.body.removeChild(script);
      window.removeEventListener('message', handleCalendlyEvent);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 flex flex-col items-center">
      
      {/* FICHA CONTENEDORA */}
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        
        {/* CABECERA DE LA FICHA */}
        <div className="p-6 border-b border-gray-50">
          <h2 className="text-xs text-medicoTeal uppercase tracking-[0.2em] mb-1">
            Agenda tu turno
          </h2>
          <h1 className="font-serif text-2xl text-medicoAzul">
            {servicio}
          </h1>
        </div>

        {/* CALENDARIO CONTENIDO */}
        <div 
          className="calendly-inline-widget h-[600px] w-full" 
          data-url={`https://calendly.com/jorgeyacoub8/30min?hide_event_type_details=1&hide_landing_page_details=1&a1=${encodeURIComponent(servicio)}`}
        ></div>
        
      </div>
    </main>
  );
}

export default function ReservaPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center">Cargando agenda...</div>}>
      <ReservaContent />
    </Suspense>
  );
}