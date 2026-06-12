'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';

const servicios = [
  {
    titulo: 'Atención Básica',
    desc: 'Corte técnico, deslaminado de talones y remoción clínica de callosidades.',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500&q=80',
  },
  {
    titulo: 'Uñas Encarnadas',
    desc: 'Tratamiento de canales, encarrilado y reeducación del lecho ungueal.',
    img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=500&q=80',
  },
  {
    titulo: 'Patologías Dérmicas',
    desc: 'Abordaje de talones agrietados y cultivo de laboratorio para micosis.',
    img: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=500&q=80',
  },
  {
    titulo: 'Estudio & Plantillas',
    desc: 'Evaluación computarizada de la marcha en 2D y confección de ortesis.',
    img: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&w=500&q=80',
  },
  {
    titulo: 'Pie Diabético',
    desc: 'Evaluación neurológica, vascular y mapeo de presiones.',
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=500&q=80',
  },
];

export default function Servicios() {
  const carruselRef = useRef<HTMLDivElement>(null);

  // Lógica de desplazamiento
  const desplazar = (direccion: 'izquierda' | 'derecha') => {
    if (carruselRef.current) {
      const scrollAmount = carruselRef.current.clientWidth * 0.8;
      carruselRef.current.scrollBy({
        left: direccion === 'izquierda' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      if (carruselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carruselRef.current;
        // Si llega al final, vuelve al inicio; si no, avanza
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carruselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          desplazar('derecha');
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="servicios" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-medicoAzul uppercase tracking-[0.15em] font-light">
            Servicios
          </h2>
        </div>

        {/* Carrusel */}
        <div
          ref={carruselRef}
          className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide scroll-smooth snap-x"
        >
          {servicios.map((item, i) => (
            <div
              key={i}
              className="min-w-[85%] md:min-w-[31.33%] flex flex-col bg-white border border-gray-100 p-6 shadow-sm snap-center"
            >
              <div className="aspect-[3/4] mb-6 overflow-hidden bg-gray-100">
                <img
                  src={item.img}
                  alt={item.titulo}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl text-medicoAzul mb-2">
                {item.titulo}
              </h3>
              <p className="text-sm text-gray-500 mb-6 flex-grow">
                {item.desc}
              </p>

              <Link
                href={`/reserva?servicio=${encodeURIComponent(item.titulo)}`}
                className="w-full py-3 border border-medicoAzul text-medicoAzul text-center text-xs uppercase tracking-[0.2em] hover:bg-medicoAzul hover:text-white transition-all"
              >
                Agendar Turno
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
