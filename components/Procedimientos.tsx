import Link from 'next/link';

export default function Procedimientos() {
  const listaProcedimientos = [
    'Uña encarnada (Onicocriptosis)',
    'Dedo en martillo',
    'Juanetes (Hallux Valgus)',
    'Cirugía de tejidos blandos',
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* COLUMNA IZQUIERDA */}
        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-3xl font-light text-medicoAzul uppercase tracking-wide">
              Procedimientos Quirúrgicos
            </h2>
            <p className="text-medicoTeal text-xs uppercase tracking-[0.2em] mt-2">
              A cargo de médico especialista
            </p>
          </div>

          <div className="space-y-3">
            {listaProcedimientos.map((procedimiento, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-gray-700 font-light"
              >
                <span className="w-1.5 h-1.5 bg-medicoAzul rounded-full"></span>
                {procedimiento}
              </div>
            ))}
          </div>

          <Link
            href="/reserva?servicio=Evaluación Quirúrgica"
            className="inline-block px-8 py-3 bg-medicoAzul text-white text-xs uppercase tracking-[0.2em] hover:bg-medicoAzul/90 transition-all text-center"
          >
            Solicitar evaluación médica
          </Link>
        </div>

        {/* COLUMNA DERECHA - CORREGIDA */}
        <div className="w-full aspect-[4/5] bg-medicoGris relative overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
            alt="Clínica Podológica Premium"
            className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
        </div>
      </div>
    </section>
  );
}
