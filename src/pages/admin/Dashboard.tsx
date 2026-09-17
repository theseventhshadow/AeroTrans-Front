import { Car, DollarSign, Ticket, Users } from 'lucide-react'
import StatusBadge from '../../components/ui/Badge'
import { mockBookings, mockDrivers, mockVehicles } from '../../data/mock'

export default function AdminDashboard() {
  const totalRevenue = mockBookings
    .filter((b) => b.status !== 'cancelada')
    .reduce((sum, b) => sum + b.price, 0)
  const activeDrivers = mockDrivers.filter((d) => d.status === 'activo').length
  const availableVehicles = mockVehicles.filter(
    (v) => v.status === 'disponible',
  ).length

  const stats = [
    {
      label: 'Reservas totales',
      value: mockBookings.length,
      icon: Ticket,
    },
    {
      label: 'Ingresos estimados',
      value: `$${totalRevenue.toLocaleString('es-CL')}`,
      icon: DollarSign,
    },
    {
      label: 'Choferes activos',
      value: `${activeDrivers} / ${mockDrivers.length}`,
      icon: Users,
    },
    {
      label: 'Vehículos disponibles',
      value: `${availableVehicles} / ${mockVehicles.length}`,
      icon: Car,
    },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-950">Panel de control</h1>
      <p className="mt-1 text-sm text-gray-500">
        Resumen general de la operación de AeroTrans.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-gray-200 bg-white p-5"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{s.label}</span>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <s.icon className="h-4.5 w-4.5" />
              </div>
            </div>
            <p className="mt-3 text-2xl font-bold text-brand-950">
              {s.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-gray-200 bg-white">
        <div className="border-b border-gray-100 px-5 py-4">
          <h2 className="font-semibold text-brand-950">Últimas reservas</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-left text-xs uppercase tracking-wide text-gray-500">
                <th className="px-5 py-3 font-medium">ID</th>
                <th className="px-5 py-3 font-medium">Cliente</th>
                <th className="px-5 py-3 font-medium">Ruta</th>
                <th className="px-5 py-3 font-medium">Fecha</th>
                <th className="px-5 py-3 font-medium">Estado</th>
              </tr>
            </thead>
            <tbody>
              {mockBookings.slice(0, 5).map((b) => (
                <tr key={b.id} className="border-b border-gray-50 last:border-0">
                  <td className="px-5 py-3 font-medium text-brand-950">
                    {b.id}
                  </td>
                  <td className="px-5 py-3 text-gray-600">{b.customerName}</td>
                  <td className="px-5 py-3 text-gray-600">
                    {b.origin} → {b.destination}
                  </td>
                  <td className="px-5 py-3 text-gray-600">
                    {b.date} {b.time}
                  </td>
                  <td className="px-5 py-3">
                    <StatusBadge status={b.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
