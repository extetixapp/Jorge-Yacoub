'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md fixed top-0 left-0 z-50 border-b border-gris-fondo">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo y Nombre */}
        <div className="flex items-center gap-3">
          <Image src="/logo.jpeg" alt="Logo" width={40} height={40} className="object-contain" />
          <span className="font-serif text-xl tracking-[0.15em] uppercase text-verde-oscuro font-light">
            Jorge Yacoub
            <span className="text-xs font-sans tracking-normal lowercase block text-verde-claro -mt-1">
              Licenciado en Podologia
            </span>
          </span>
        </div>

        {/* Menú Escritorio - Cambiado a text-verde-claro */}
        <div className="hidden md:flex items-center space-x-12 text-xs uppercase tracking-[0.2em] font-sans font-light text-verde-claro">
          <a href="#inicio" className="hover:text-verde-oscuro transition-colors">Inicio</a>
          <a href="#servicios" className="hover:text-verde-oscuro transition-colors">Servicios</a>
          <a href="#faq" className="hover:text-verde-oscuro transition-colors">Preguntas</a>
        </div>

        {/* Botón Hamburguesa Móvil - Cambiado a text-verde-claro */}
        <button className="md:hidden text-verde-claro" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Menú Desplegable Móvil - Cambiado a text-verde-claro */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gris-fondo py-6 px-6 flex flex-col space-y-4 text-center text-xs uppercase tracking-[0.2em] text-verde-claro">
          <a href="#inicio" onClick={() => setIsOpen(false)}>Inicio</a>
          <a href="#servicios" onClick={() => setIsOpen(false)}>Servicios</a>
          <a href="#faq" onClick={() => setIsOpen(false)}>Preguntas</a>
        </div>
      )}
    </nav>
  );
}