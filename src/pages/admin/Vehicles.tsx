import { Plus } from 'lucide-react'
import Button from '../../components/ui/Button'
import { mockVehicles } from '../../data/mock'
import type { Vehicle } from '../../types/booking'

const statusStyles: Record<Vehicle['status'], string> = {
  disponible: 'bg-emerald-100 text-emerald-700',
  'en-servicio': 'bg-blue-100 text-blue-700',
  mantenimiento: 'bg-amber-100 text-amber-700',
}

const statusLabels: Record<Vehicle['status'], string> = {
  disponible: 'Disponible',
  'en-servicio': 'En servicio',
  mantenimiento: 'Mantenimiento',
}

export default function AdminVehicles() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-brand-950">Vehículos</h1>
          <p className="mt-1 text-sm text-gray-500">
            Administra la flota de vehículos de AeroTrans.
          </p>
        </div>
        <Button size="sm">
          <Plus className="h-4 w-4" />
          Nuevo vehículo
        </Button>
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200 bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-left text-xs uppercase tracking-wide text-gray-500">
              <th className="px-5 py-3 font-medium">Patente</th>
              <th className="px-5 py-3 font-medium">Modelo</th>
              <th className="px-5 py-3 font-medium">Tipo</th>
              <th className="px-5 py-3 font-medium">Capacidad</th>
              <th className="px-5 py-3 font-medium">Estado</th>
            </tr>
          </thead>
          <tbody>
            {mockVehicles.map((v) => (
              <tr key={v.id} className="border-b border-gray-50 last:border-0">
                <td className="px-5 py-3 font-medium text-brand-950">
                  {v.plate}
                </td>
                <td className="px-5 py-3 text-gray-600">{v.model}</td>
                <td className="px-5 py-3 text-gray-600">{v.type}</td>
                <td className="px-5 py-3 text-gray-600">
                  {v.capacity} pasajeros
                </td>
                <td className="px-5 py-3">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[v.status]}`}
                  >
                    {statusLabels[v.status]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
