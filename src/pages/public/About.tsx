import { Award, Handshake, ShieldCheck, Users } from 'lucide-react'
import PageHero from '../../components/ui/PageHero'

const values = [
  {
    icon: ShieldCheck,
    title: 'Seguridad primero',
    description:
      'Todos nuestros vehículos y choferes cumplen con estrictos protocolos de seguridad y mantenimiento.',
  },
  {
    icon: Award,
    title: 'Excelencia en el servicio',
    description:
      'Capacitamos a nuestro equipo para ofrecer una experiencia de viaje cómoda y profesional.',
  },
  {
    icon: Handshake,
    title: 'Compromiso con el cliente',
    description:
      'Tu satisfacción es nuestra prioridad: puntualidad, transparencia y atención cercana.',
  },
  {
    icon: Users,
    title: 'Equipo experimentado',
    description:
      'Más de una década conectando personas con su destino, viaje a viaje.',
  },
]

export default function About() {
  return (
    <div>
      <PageHero
        title="Sobre AeroTrans"
        subtitle="Conectamos personas con sus destinos a través de traslados privados, seguros y puntuales."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-brand-950">
              Nuestra historia
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              AeroTrans nació con un objetivo simple: hacer que llegar al
              aeropuerto —o volver de él— sea una experiencia sin estrés.
              Desde nuestros inicios, hemos crecido hasta convertirnos en una
              alternativa confiable de transporte privado para miles de
              pasajeros cada año.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-950">
              Nuestra misión
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Ofrecer un servicio de traslados accesible, seguro y puntual,
              respaldado por tecnología simple y un equipo humano
              comprometido con cada viaje.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-brand-950">
            Lo que nos define
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-semibold text-brand-950">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
