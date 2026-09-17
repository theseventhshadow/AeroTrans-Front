import { Briefcase, Calendar, MapPin, Users } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/Button'
import { vehicleOptions } from '../../data/mock'

export default function BookingResults() {
  const [params] = useSearchParams()
  const navigate = useNavigate()

  const origin = params.get('origin') || 'Origen'
  const destination = params.get('destination') || 'Destino'
  const departureDate = params.get('departureDate') || ''
  const departureTime = params.get('departureTime') || ''
  const passengers = params.get('passengers') || '1'

  function handleSelect(vehicleId: string) {
    const next = new URLSearchParams(params)
    next.set('vehicle', vehicleId)
    navigate(`/checkout?${next.toString()}`)
  }

  return (
    <div className="bg-gray-50 py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
          <h1 className="text-lg font-bold text-brand-950">
            Resultados de tu búsqueda
          </h1>
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-brand-600" />
              {origin} → {destination}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-brand-600" />
              {departureDate} {departureTime}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-brand-600" />
              {passengers} pasajero(s)
            </span>
          </div>
        </div>

        <div className="mt-8 space-y-5">
          {vehicleOptions.map((v) => (
            <div
              key={v.id}
              className="flex flex-col items-start gap-5 rounded-2xl border border-gray-200 bg-white p-6 sm:flex-row sm:items-center"
            >
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-4xl">
                {v.image}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-brand-950">{v.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{v.description}</p>
                <div className="mt-2 flex gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" />
                    Hasta {v.maxPassengers} pasajeros
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-3.5 w-3.5" />
                    Hasta {v.maxLuggage} maletas
                  </span>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-2 sm:w-auto sm:items-end">
                <span className="text-xl font-bold text-brand-950">
                  ${v.pricePerTrip.toLocaleString('es-CL')}
                </span>
                <Button onClick={() => handleSelect(v.id)} className="w-full sm:w-auto">
                  Seleccionar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
