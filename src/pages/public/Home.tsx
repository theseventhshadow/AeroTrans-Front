import { Clock, MapPin, ShieldCheck, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import BookingForm from '../../components/booking/BookingForm'
import { destinations } from '../../data/mock'

const features = [
  {
    icon: ShieldCheck,
    title: 'Viajes seguros',
    description:
      'Choferes profesionales, vehículos revisados y seguimiento en tiempo real de tu viaje.',
  },
  {
    icon: Clock,
    title: 'Puntualidad garantizada',
    description:
      'Monitoreamos tu vuelo para ajustar la hora de recogida y evitar esperas.',
  },
  {
    icon: MapPin,
    title: 'Cobertura total',
    description:
      'Traslados a cualquier punto de la ciudad y a las principales localidades cercanas.',
  },
  {
    icon: Star,
    title: 'Reserva sin complicaciones',
    description:
      'Cotiza, reserva y paga en minutos, sin llamadas ni papeleo.',
  },
]

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-800 to-brand-600 pb-28 pt-16 sm:pb-36 sm:pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Traslados privados,{' '}
              <span className="text-accent-400">puerta a puerta</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-brand-100">
              Reserva tu traslado al aeropuerto o dentro de la ciudad en
              minutos. Puntual, seguro y al mejor precio.
            </p>
          </div>
        </div>

        <div className="mx-auto -mb-32 mt-10 max-w-5xl px-4 sm:-mb-40 sm:px-6 lg:px-8">
          <BookingForm />
        </div>
      </section>

      <section className="bg-white pb-20 pt-40 sm:pt-48">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-brand-950">
              ¿Por qué viajar con AeroTrans?
            </h2>
            <p className="mt-3 text-gray-600">
              Miles de pasajeros confían en nosotros cada mes para llegar a
              tiempo a su destino.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <f.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-semibold text-brand-950">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-brand-950">
                Destinos populares
              </h2>
              <p className="mt-2 text-gray-600">
                Los traslados más solicitados por nuestros pasajeros.
              </p>
            </div>
            <Link
              to="/destinos"
              className="text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              Ver todos los destinos →
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((d) => (
              <div
                key={d.id}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-lg"
              >
                <div className="flex h-36 items-center justify-center bg-brand-50 text-5xl">
                  {d.image}
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-brand-950">{d.name}</h3>
                  <p className="mt-1.5 text-sm text-gray-600">
                    {d.description}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-brand-600">
                    Desde ${d.fromPrice.toLocaleString('es-CL')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-600">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">
            ¿Listo para tu próximo viaje?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-100">
            Reserva ahora y viaja con la tranquilidad de un servicio
            profesional de principio a fin.
          </p>
          <Link
            to="/contacto"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-50"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </div>
  )
}
