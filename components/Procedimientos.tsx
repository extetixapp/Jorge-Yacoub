import Link from 'next/link';

export default function Procedimientos() {
  const listaProcedimientos = [
    'Uña encarnada (Onicocriptosis)',
    'Dedo en martillo',
    'Juanetes (Hallux Valgus)',
    'Cirugía de tejidos blandos',
  ];

  return (
    <section className="py-24 bg-gris-fondo border-t border-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* COLUMNA IZQUIERDA */}
        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-3xl font-light text-verde-oscuro uppercase tracking-wide">
              Procedimientos Quirúrgicos
            </h2>
            <p className="text-verde-claro text-xs uppercase tracking-[0.2em] mt-2">
              A cargo de médico especialista
            </p>
          </div>

          <div className="space-y-3">
            {listaProcedimientos.map((procedimiento, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-gris-carbon font-light"
              >
                {/* Cambiamos el punto a verde-oscuro */}
                <span className="w-1.5 h-1.5 bg-verde-oscuro rounded-full"></span>
                {procedimiento}
              </div>
            ))}
          </div>

          <Link
            href="/reserva?servicio=Evaluación Quirúrgica"
            className="inline-block px-8 py-3 bg-verde-oscuro text-white text-xs uppercase tracking-[0.2em] hover:bg-verde-claro transition-all duration-300 text-center"
          >
            Solicitar evaluación médica
          </Link>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="w-full aspect-[4/5] bg-white relative overflow-hidden group">
          <img
            src="/cirujia.jpeg"
            alt="Cirujia de juanetes"
            className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
        </div>
      </div>
    </section>
  );
}