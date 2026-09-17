import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import StatusBadge from '../../components/ui/Badge'
import { mockBookings } from '../../data/mock'
import type { BookingStatus } from '../../types/booking'

const statusFilters: (BookingStatus | 'todas')[] = [
  'todas',
  'pendiente',
  'confirmada',
  'en-curso',
  'completada',
  'cancelada',
]

export default function AdminBookings() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState<(typeof statusFilters)[number]>('todas')

  const filtered = useMemo(() => {
    return mockBookings.filter((b) => {
      const matchesStatus = status === 'todas' || b.status === status
      const matchesQuery =
        query.trim() === '' ||
        [b.id, b.customerName, b.origin, b.destination]
          .join(' ')
          .toLowerCase()
          .includes(query.toLowerCase())
      return matchesStatus && matchesQuery
    })
  }, [query, status])

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-brand-950">Reservas</h1>
          <p className="mt-1 text-sm text-gray-500">
            Gestiona todas las reservas de traslados.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1 sm:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por cliente, ID o ruta..."
            className="w-full rounded-xl border border-gray-200 py-2.5 pl-9 pr-4 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {statusFilters.map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium capitalize transition-colors ${
                status === s
                  ? 'bg-brand-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {s === 'todas' ? 'Todas' : s.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200 bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-left text-xs uppercase tracking-wide text-gray-500">
              <th className="px-5 py-3 font-medium">ID</th>
              <th className="px-5 py-3 font-medium">Cliente</th>
              <th className="px-5 py-3 font-medium">Ruta</th>
              <th className="px-5 py-3 font-medium">Fecha</th>
              <th className="px-5 py-3 font-medium">Vehículo</th>
              <th className="px-5 py-3 font-medium">Precio</th>
              <th className="px-5 py-3 font-medium">Estado</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((b) => (
              <tr key={b.id} className="border-b border-gray-50 last:border-0">
                <td className="px-5 py-3 font-medium text-brand-950">
                  {b.id}
                </td>
                <td className="px-5 py-3 text-gray-600">
                  <div>{b.customerName}</div>
                  <div className="text-xs text-gray-400">
                    {b.customerEmail}
                  </div>
                </td>
                <td className="px-5 py-3 text-gray-600">
                  {b.origin} → {b.destination}
                </td>
                <td className="px-5 py-3 text-gray-600">
                  {b.date} {b.time}
                </td>
                <td className="px-5 py-3 text-gray-600">{b.vehicle}</td>
                <td className="px-5 py-3 text-gray-600">
                  ${b.price.toLocaleString('es-CL')}
                </td>
                <td className="px-5 py-3">
                  <StatusBadge status={b.status} />
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-5 py-8 text-center text-sm text-gray-400"
                >
                  No se encontraron reservas.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
