'use client';

import { useSearchParams } from 'next/navigation';
import { InlineWidget } from 'react-calendly'; // Podés instalarlo con `npm install react-calendly`

export default function ReservaPage() {
  const searchParams = useSearchParams();
  const servicio = searchParams.get('servicio') || 'Consulta General';

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-2xl mx-auto bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-light text-medicoAzul mb-2 uppercase">
          Agendar: {servicio}
        </h1>
        <p className="text-gray-500 mb-8">
          Por favor, completá tus datos para confirmar el turno.
        </p>

        {/* Aquí Calendly carga en la página */}
        <InlineWidget
          url="https://calendly.com/sinergiapspcoaching/30min"
          pageSettings={{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: '00a2ff',
            textColor: '4d5055',
          }}
        />
      </div>
    </main>
  );
}
