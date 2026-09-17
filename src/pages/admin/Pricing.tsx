import { useState } from 'react'
import Button from '../../components/ui/Button'
import { vehicleOptions } from '../../data/mock'

export default function AdminPricing() {
  const [prices, setPrices] = useState(
    Object.fromEntries(vehicleOptions.map((v) => [v.id, v.pricePerTrip])),
  )
  const [saved, setSaved] = useState(false)

  function handleChange(id: string, value: string) {
    setSaved(false)
    setPrices((prev) => ({ ...prev, [id]: Number(value) || 0 }))
  }

  function handleSave() {
    setSaved(true)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-950">Precios</h1>
      <p className="mt-1 text-sm text-gray-500">
        Define el precio base por tipo de vehículo para los traslados.
      </p>

      <div className="mt-6 max-w-2xl space-y-4 rounded-2xl border border-gray-200 bg-white p-6">
        {vehicleOptions.map((v) => (
          <div
            key={v.id}
            className="flex items-center justify-between gap-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-xl">
                {v.image}
              </span>
              <div>
                <p className="font-medium text-brand-950">{v.name}</p>
                <p className="text-xs text-gray-500">
                  Hasta {v.maxPassengers} pasajeros
                </p>
              </div>
            </div>
            <label className="flex items-center gap-2">
              <span className="text-sm text-gray-500">$</span>
              <input
                type="number"
                value={prices[v.id]}
                onChange={(e) => handleChange(v.id, e.target.value)}
                className="w-28 rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
              />
            </label>
          </div>
        ))}

        <div className="flex items-center gap-3 pt-2">
          <Button onClick={handleSave}>Guardar cambios</Button>
          {saved && (
            <span className="text-sm font-medium text-emerald-600">
              Cambios guardados
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
