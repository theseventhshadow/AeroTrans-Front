import type { BookingStatus } from '../../types/booking'

const statusStyles: Record<BookingStatus, string> = {
  pendiente: 'bg-amber-100 text-amber-700',
  confirmada: 'bg-blue-100 text-blue-700',
  'en-curso': 'bg-purple-100 text-purple-700',
  completada: 'bg-emerald-100 text-emerald-700',
  cancelada: 'bg-red-100 text-red-700',
}

const statusLabels: Record<BookingStatus, string> = {
  pendiente: 'Pendiente',
  confirmada: 'Confirmada',
  'en-curso': 'En curso',
  completada: 'Completada',
  cancelada: 'Cancelada',
}

export default function StatusBadge({ status }: { status: BookingStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[status]}`}
    >
      {statusLabels[status]}
    </span>
  )
}
