'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ReservaExitosa() {
  const router = useRouter();

  useEffect(() => {
    // A los 3 segundos, volvemos al inicio automáticamente
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-light text-medicoAzul">
          ¡Reserva Exitosa!
        </h1>
        <p className="text-gray-500">
          Estamos procesando tu turno. Volviendo al inicio...
        </p>
      </div>
    </main>
  );
}
