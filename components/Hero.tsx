import React from 'react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 max-w-7xl mx-auto bg-transparent"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Textos Principales */}
        <div className="lg:col-span-7 space-y-8 pr-0 lg:pr-12">
          <span className="text-xs uppercase tracking-[0.25em] text-verde-claro font-sans block font-light">
            Atención Podológica de Alta Gama
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-verde-oscuro leading-[1.1] tracking-wide">
            Diplomado universitario en <br />
            <span className="italic font-normal">Pie Diabético</span> <br />y
            Ortopedia.
          </h1>
          <p className="text-sm md:text-base text-gris-carbon font-light max-w-md leading-relaxed font-sans">
            Combinamos diagnóstico clínico avanzado y soluciones a medida para
            restaurar el bienestar, la armonía y la salud de tus pasos.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <a
              href="#calendario"
              className="bg-verde-oscuro text-white text-xs uppercase tracking-[0.2em] font-sans font-light px-8 py-4 text-center hover:bg-verde-claro transition-colors duration-300"
            >
              Agendar Turno Online
            </a>
            <a
              href="#servicios"
              className="border border-verde-oscuro text-verde-oscuro text-xs uppercase tracking-[0.2em] font-sans font-light px-8 py-4 text-center hover:bg-verde-oscuro hover:text-white transition-all duration-300"
            >
              Ver Especialidades
            </a>
          </div>
        </div>

        {/* Imagen Estilo Revista Medical */}
        <div className="lg:col-span-5 aspect-[4/5] bg-gris-fondo relative overflow-hidden group">
          <img
            src="/portada.jpeg"
            alt="Jorge Yacoub"
            className="w-full h-full object-contain grayscale-[20%] group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
        </div>
      </div>
    </section>
  );
}