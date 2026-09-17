import { Plus, Star } from 'lucide-react'
import Button from '../../components/ui/Button'
import { mockDrivers } from '../../data/mock'

export default function AdminDrivers() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-brand-950">Choferes</h1>
          <p className="mt-1 text-sm text-gray-500">
            Administra el equipo de choferes de AeroTrans.
          </p>
        </div>
        <Button size="sm">
          <Plus className="h-4 w-4" />
          Nuevo chofer
        </Button>
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200 bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-left text-xs uppercase tracking-wide text-gray-500">
              <th className="px-5 py-3 font-medium">Nombre</th>
              <th className="px-5 py-3 font-medium">Teléfono</th>
              <th className="px-5 py-3 font-medium">Licencia</th>
              <th className="px-5 py-3 font-medium">Vehículo asignado</th>
              <th className="px-5 py-3 font-medium">Calificación</th>
              <th className="px-5 py-3 font-medium">Estado</th>
            </tr>
          </thead>
          <tbody>
            {mockDrivers.map((d) => (
              <tr key={d.id} className="border-b border-gray-50 last:border-0">
                <td className="px-5 py-3 font-medium text-brand-950">
                  {d.name}
                </td>
                <td className="px-5 py-3 text-gray-600">{d.phone}</td>
                <td className="px-5 py-3 text-gray-600">{d.license}</td>
                <td className="px-5 py-3 text-gray-600">
                  {d.vehicleAssigned ?? '—'}
                </td>
                <td className="px-5 py-3 text-gray-600">
                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    {d.rating.toFixed(1)}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
                      d.status === 'activo'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {d.status === 'activo' ? 'Activo' : 'Inactivo'}
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
