import React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md fixed top-0 left-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo / Nombre de marca */}
        <span className="font-serif text-xl tracking-[0.15em] uppercase text-medicoAzul font-light">
          Jorge Yacoub{' '}
          <span className="text-xs font-sans tracking-normal lowercase block text-medicoTeal -mt-1">
            Podologo
          </span>
        </span>

        {/* Links Minimalistas */}
        <div className="hidden md:flex items-center space-x-12 text-xs uppercase tracking-[0.2em] font-sans font-light text-gray-500">
          <a href="#inicio" className="hover:text-medicoAzul transition-colors">
            Inicio
          </a>
          <a
            href="#servicios"
            className="hover:text-medicoAzul transition-colors"
          >
            Servicios
          </a>
          <a href="#faq" className="hover:text-medicoAzul transition-colors">
            Preguntas
          </a>
          <a
            href="#calendario"
            className="px-5 py-2 border border-medicoAzul text-medicoAzul hover:bg-medicoAzul hover:text-white transition-all duration-300 tracking-[0.15em]"
          >
            Reservar Turno
          </a>
        </div>
      </div>
    </nav>
  );
}
