'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';

const servicios = [
  {
    titulo: 'Atención Básica',
    desc: 'Corte técnico, deslaminado de talones y remoción clínica de callosidades.',
    img: 'atencion.jpeg',
  },
  {
    titulo: 'Uñas Encarnadas',
    desc: 'Tratamiento de canales, encarrilado y reeducación del lecho ungueal.',
    img: '/uñaenc.jpeg',
  },
  {
    titulo: 'Patologías Dérmicas',
    desc: 'Abordaje de talones agrietados,dermatitis,verrugas plantares y cultivo de laboratorio para micosis.',
    img: '/dermicas.jpeg',
  },
  {
    titulo: 'Estudio & Plantillas',
    desc: 'Evaluación computarizada de la marcha en 2D y confección de ortesis (Plantillas).',
    img: '/plantillas.jpeg',
  },
  {
    titulo: 'Pie Diabético',
    desc: 'Prevencion de lesiones. Evaluación neurológica, vascular y mapeo de presiones.',
    img: '/diebetico.jpeg',
  },
];

export default function Servicios() {
  const carruselRef = useRef<HTMLDivElement>(null);

  const desplazar = (direccion: 'izquierda' | 'derecha') => {
    if (carruselRef.current) {
      const scrollAmount = carruselRef.current.clientWidth * 0.8;
      carruselRef.current.scrollBy({
        left: direccion === 'izquierda' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (carruselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carruselRef.current;
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
    <section id="servicios" className="py-24 bg-white border-t border-gris-fondo">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-verde-oscuro uppercase tracking-[0.15em] font-light">
            Servicios
          </h2>
        </div>

        <div
          ref={carruselRef}
          className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide scroll-smooth snap-x"
        >
          {servicios.map((item, i) => (
            <div
              key={i}
              className="min-w-[85%] md:min-w-[31.33%] flex flex-col bg-white border border-gris-fondo p-6 shadow-sm snap-center"
            >
              <div className="aspect-[3/4] mb-6 overflow-hidden bg-gris-fondo">
                <img
                  src={item.img}
                  alt={item.titulo}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl text-verde-oscuro mb-2">
                {item.titulo}
              </h3>
              <p className="text-sm text-gris-carbon mb-6 flex-grow font-sans font-light">
                {item.desc}
              </p>

              <Link
                href={`/reserva?servicio=${encodeURIComponent(item.titulo)}`}
                className="w-full py-3 border border-verde-oscuro text-verde-oscuro text-center text-xs uppercase tracking-[0.2em] hover:bg-verde-oscuro hover:text-white transition-all duration-300"
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