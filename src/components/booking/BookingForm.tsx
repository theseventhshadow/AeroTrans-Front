import { Calendar, Clock, MapPin, Users } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import type { TripType } from '../../types/booking'
import Button from '../ui/Button'

export default function BookingForm() {
  const navigate = useNavigate()
  const [tripType, setTripType] = useState<TripType>('ida')
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [departureDate, setDepartureDate] = useState('')
  const [departureTime, setDepartureTime] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [returnTime, setReturnTime] = useState('')
  const [passengers, setPassengers] = useState(1)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const params = new URLSearchParams({
      tripType,
      origin,
      destination,
      departureDate,
      departureTime,
      passengers: String(passengers),
    })
    if (tripType === 'ida-vuelta') {
      params.set('returnDate', returnDate)
      params.set('returnTime', returnTime)
    }
    navigate(`/resultados?${params.toString()}`)
  }

  return (
    <div className="w-full rounded-2xl bg-white p-5 shadow-xl shadow-brand-950/10 sm:p-7">
      <div className="mb-5 flex gap-2">
        {(['ida', 'ida-vuelta'] as TripType[]).map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setTripType(type)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
              tripType === type
                ? 'bg-brand-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {type === 'ida' ? 'Solo ida' : 'Ida y vuelta'}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Origen" icon={<MapPin className="h-4 w-4" />}>
            <input
              required
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              placeholder="Aeropuerto, hotel, dirección..."
              className="w-full border-0 bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </Field>
          <Field label="Destino" icon={<MapPin className="h-4 w-4" />}>
            <input
              required
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Aeropuerto, hotel, dirección..."
              className="w-full border-0 bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </Field>
        </div>

        <div
          className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${
            tripType === 'ida-vuelta' ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
          }`}
        >
          <Field label="Fecha de ida" icon={<Calendar className="h-4 w-4" />}>
            <input
              required
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="w-full border-0 bg-transparent text-sm outline-none"
            />
          </Field>
          <Field label="Hora de ida" icon={<Clock className="h-4 w-4" />}>
            <input
              required
              type="time"
              value={departureTime}
              onChange={(e) => setDepartureTime(e.target.value)}
              className="w-full border-0 bg-transparent text-sm outline-none"
            />
          </Field>

          {tripType === 'ida-vuelta' && (
            <>
              <Field
                label="Fecha de vuelta"
                icon={<Calendar className="h-4 w-4" />}
              >
                <input
                  required
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full border-0 bg-transparent text-sm outline-none"
                />
              </Field>
              <Field
                label="Hora de vuelta"
                icon={<Clock className="h-4 w-4" />}
              >
                <input
                  required
                  type="time"
                  value={returnTime}
                  onChange={(e) => setReturnTime(e.target.value)}
                  className="w-full border-0 bg-transparent text-sm outline-none"
                />
              </Field>
            </>
          )}

          <Field label="Pasajeros" icon={<Users className="h-4 w-4" />}>
            <select
              value={passengers}
              onChange={(e) => setPassengers(Number(e.target.value))}
              className="w-full border-0 bg-transparent text-sm outline-none"
            >
              {Array.from({ length: 16 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'pasajero' : 'pasajeros'}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <Button type="submit" size="lg" className="w-full">
          Buscar traslado
        </Button>
      </form>
    </div>
  )
}

function Field({
  label,
  icon,
  children,
}: {
  label: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <label className="block rounded-xl border border-gray-200 px-4 py-2.5 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-100">
      <span className="mb-0.5 flex items-center gap-1.5 text-xs font-medium text-gray-500">
        {icon}
        {label}
      </span>
      {children}
    </label>
  )
}
