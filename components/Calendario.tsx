import React, { useState, useEffect } from 'react';

declare global {
  interface Window {
    Calendly?: any;
  }
}

interface CalendarioProps {
  servicioSeleccionado: string;
}

export default function Calendario({ servicioSeleccionado }: CalendarioProps) {
  const [nombre, setNombre] = useState<string>('');
  const [telefono, setTelefono] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [motivoEspecifico, setMotivoEspecifico] = useState<string>('');
  const [esPrimerTurno, setEsPrimerTurno] = useState<string>('');

  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js'
    );
    head?.appendChild(script);

    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event && e.data.event === 'calendly.event_scheduled') {
        // Cierra el modal de Calendly
        const closeButtons = document.querySelectorAll('.calendly-popup-close');
        if (closeButtons.length > 0) {
          (closeButtons[0] as HTMLElement).click();
        }

        // Refresca la página tras 1 segundo
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    };

    window.addEventListener('message', handleCalendlyEvent);

    return () => {
      head?.removeChild(script);
      window.removeEventListener('message', handleCalendlyEvent);
    };
  }, []);

  const manejarReserva = (e: React.FormEvent) => {
    e.preventDefault();
    const baseUrl = 'https://calendly.com/jorgeyacoub8/30min';

    const queryParams = new URLSearchParams({
      name: nombre,
      email: email,
      a1: `Tel: ${telefono}`,
      a2: `Servicio: ${servicioSeleccionado}`,
      a3: `Historial: ${esPrimerTurno}`,
      a4: `Detalle: ${motivoEspecifico}`,
    }).toString();

    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: `${baseUrl}?${queryParams}` });
    }
  };

  return (
    <section
      id="calendario"
      className="py-24 bg-medicoGris/40 border-t border-gray-100 relative"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white p-8 max-w-2xl mx-auto shadow-sm">
          <h2 className="text-2xl font-bold text-medicoAzul mb-6 text-center">
            Agendar: {servicioSeleccionado}
          </h2>
          <form onSubmit={manejarReserva} className="space-y-4">
            <input
              type="text"
              placeholder="Nombre Completo"
              required
              className="w-full p-3 border"
              onChange={(e) => setNombre(e.target.value)}
            />
            <input
              type="text"
              placeholder="WhatsApp"
              required
              className="w-full p-3 border"
              onChange={(e) => setTelefono(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full p-3 border"
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Campo Historial Integrado */}
            <div className="text-sm">
              <label className="block mb-2 text-gray-700">
                ¿Es tu primera vez?
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="primera"
                    value="Si"
                    onChange={(e) => setEsPrimerTurno(e.target.value)}
                  />{' '}
                  Si
                </label>
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="primera"
                    value="No"
                    onChange={(e) => setEsPrimerTurno(e.target.value)}
                  />{' '}
                  No
                </label>
              </div>
            </div>

            <input
              type="text"
              placeholder="Detalle adicional (opcional)"
              className="w-full p-3 border"
              onChange={(e) => setMotivoEspecifico(e.target.value)}
            />

            <button
              type="submit"
              className="w-full py-4 bg-medicoAzul text-white font-bold hover:bg-opacity-90 transition"
            >
              Confirmar Reserva
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
