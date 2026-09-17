import { Link } from 'react-router-dom'
import PageHero from '../../components/ui/PageHero'
import Button from '../../components/ui/Button'
import { destinations } from '../../data/mock'

export default function Destinations() {
  return (
    <div>
      <PageHero
        title="Destinos"
        subtitle="Descubre a dónde puedes viajar con AeroTrans y conoce los precios estimados de cada traslado."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <div
              key={d.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-lg"
            >
              <div className="flex h-44 items-center justify-center bg-brand-50 text-6xl">
                {d.image}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-brand-950">
                  {d.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {d.description}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-semibold text-brand-600">
                    Desde ${d.fromPrice.toLocaleString('es-CL')}
                  </span>
                  <Link to="/">
                    <Button size="sm" variant="outline">
                      Cotizar
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
