import { CheckCircle2 } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import Button from '../../components/ui/Button'
import { vehicleOptions } from '../../data/mock'

export default function Checkout() {
  const [params] = useSearchParams()
  const [confirmed, setConfirmed] = useState(false)

  const vehicle =
    vehicleOptions.find((v) => v.id === params.get('vehicle')) ||
    vehicleOptions[0]
  const origin = params.get('origin') || 'Origen'
  const destination = params.get('destination') || 'Destino'
  const departureDate = params.get('departureDate') || ''
  const departureTime = params.get('departureTime') || ''
  const passengers = params.get('passengers') || '1'

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setConfirmed(true)
  }

  if (confirmed) {
    return (
      <div className="mx-auto max-w-lg px-4 py-24 text-center sm:px-6">
        <CheckCircle2 className="mx-auto h-16 w-16 text-emerald-500" />
        <h1 className="mt-6 text-2xl font-bold text-brand-950">
          ¡Reserva confirmada!
        </h1>
        <p className="mt-3 text-gray-600">
          Hemos enviado los detalles de tu traslado a tu correo. Nuestro
          equipo se pondrá en contacto para coordinar el punto de encuentro.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-lg font-bold text-brand-950">
          Confirma tu reserva
        </h1>

        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6 lg:col-span-3"
          >
            <h2 className="font-semibold text-brand-950">Datos del pasajero</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Nombre completo
                </label>
                <input
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <input
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Correo electrónico
              </label>
              <input
                required
                type="email"
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Vuelo (opcional)
              </label>
              <input
                placeholder="Ej. LA800"
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Confirmar y pagar ${vehicle.pricePerTrip.toLocaleString('es-CL')}
            </Button>
          </form>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:col-span-2">
            <h2 className="font-semibold text-brand-950">Resumen del viaje</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-gray-500">Origen</dt>
                <dd className="font-medium text-brand-950">{origin}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Destino</dt>
                <dd className="font-medium text-brand-950">{destination}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Fecha</dt>
                <dd className="font-medium text-brand-950">
                  {departureDate} {departureTime}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Pasajeros</dt>
                <dd className="font-medium text-brand-950">{passengers}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Vehículo</dt>
                <dd className="font-medium text-brand-950">{vehicle.name}</dd>
              </div>
            </dl>
            <div className="mt-5 flex justify-between border-t border-gray-200 pt-4">
              <span className="font-semibold text-brand-950">Total</span>
              <span className="text-lg font-bold text-brand-600">
                ${vehicle.pricePerTrip.toLocaleString('es-CL')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
