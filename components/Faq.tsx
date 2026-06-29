'use client';

import React, { useState } from 'react';

interface FaqItem {
  pregunta: string;
  respuesta: string;
}

const faqs: FaqItem[] = [
  {
    pregunta: '¿Trabajan con Obras Sociales o Prepagas?',
    respuesta:
      'La atención en nuestra clínica es de carácter particular. Emitimos una factura oficial con todos los requerimientos impositivos y médicos necesarios para que puedas presentar ante tu obra social o prepaga y gestionar el reintegro correspondiente según tu plan.',
  },
  {
    pregunta: '¿Cuánto dura aproximadamente cada sesión?',
    respuesta:
      'Una sesión de atención podológica básica o clínica tiene una duración estimada de entre 40 y 50 minutos. Los estudios biomecánicos complejos o la primera consulta de pie diabético pueden extenderse hasta una hora para garantizar una evaluación rigurosa.',
  },
  {
    pregunta: '¿Cómo sé si necesito plantillas ortopédicas?',
    respuesta:
      'Si sufres dolores persistentes en la planta de los pies, talones, rodillas o incluso en la zona lumbar al caminar o estar de pie, es aconsejable realizar un estudio computarizado de la marcha. Nuestro análisis clínico determina con precisión matemática si existe una alteración en la pisada que requiera soporte.',
  },
];

export default function Faq() {
  const [abiertoIdx, setAbiertoIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setAbiertoIdx(abiertoIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white border-t border-gris-fondo">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-light text-verde-oscuro tracking-wide uppercase">
            Preguntas Frecuentes
          </h2>
          {/* Línea decorativa verde claro */}
          <div className="w-12 h-[1px] bg-verde-claro mx-auto mt-3"></div>
        </div>

        <div className="border-t border-gris-fondo divide-y divide-gris-fondo">
          {faqs.map((faq, idx) => {
            const estaAbierto = abiertoIdx === idx;
            return (
              <div key={idx} className="py-6">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center text-left group"
                >
                  <span className="font-serif text-xl text-verde-oscuro font-normal group-hover:text-verde-claro transition-colors">
                    {faq.pregunta}
                  </span>
                  <span className="text-xl font-light text-verde-oscuro ml-4">
                    {estaAbierto ? '−' : '+'}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                    estaAbierto
                      ? 'grid-rows-[1fr] opacity-100 mt-4'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-gris-carbon font-light leading-relaxed">
                      {faq.respuesta}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
