import { Mail, MapPin, Phone } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import Button from '../../components/ui/Button'
import PageHero from '../../components/ui/PageHero'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div>
      <PageHero
        title="Contáctanos"
        subtitle="¿Tienes dudas o necesitas un traslado especial? Escríbenos y te responderemos a la brevedad."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-brand-950">
              Información de contacto
            </h2>
            <ul className="mt-6 space-y-5 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <div>
                  <p className="font-medium text-brand-950">Teléfono</p>
                  <p>+56 2 2345 6789</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <div>
                  <p className="font-medium text-brand-950">Correo</p>
                  <p>contacto@aerotrans.cl</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <div>
                  <p className="font-medium text-brand-950">Oficina</p>
                  <p>Av. Aeropuerto 1234, Santiago, Chile</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            {sent ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
                <p className="font-semibold text-emerald-800">
                  ¡Gracias por escribirnos!
                </p>
                <p className="mt-1 text-sm text-emerald-700">
                  Hemos recibido tu mensaje y te responderemos pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">
                      Nombre
                    </label>
                    <input
                      required
                      className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">
                      Correo
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Asunto
                  </label>
                  <input
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Mensaje
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                  />
                </div>
                <Button type="submit" size="lg">
                  Enviar mensaje
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
