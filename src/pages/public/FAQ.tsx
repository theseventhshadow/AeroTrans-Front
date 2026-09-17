import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import PageHero from '../../components/ui/PageHero'

const faqs = [
  {
    question: '¿Cómo reservo un traslado?',
    answer:
      'Completa el formulario de búsqueda con tu origen, destino, fecha y número de pasajeros. Elige el vehículo que prefieras y confirma tu reserva en pocos pasos.',
  },
  {
    question: '¿Con cuánta anticipación debo reservar?',
    answer:
      'Recomendamos reservar con al menos 12 horas de anticipación, aunque también atendemos solicitudes de último minuto según disponibilidad.',
  },
  {
    question: '¿Qué pasa si mi vuelo se atrasa?',
    answer:
      'Monitoreamos el estado de tu vuelo en tiempo real y ajustamos automáticamente la hora de recogida sin costo adicional.',
  },
  {
    question: '¿Puedo cancelar o modificar mi reserva?',
    answer:
      'Sí, puedes cancelar o modificar tu reserva sin costo hasta 24 horas antes del traslado desde tu correo de confirmación.',
  },
  {
    question: '¿Qué formas de pago aceptan?',
    answer:
      'Aceptamos tarjetas de crédito, débito y transferencia bancaria. El pago se realiza de forma segura al confirmar la reserva.',
  },
  {
    question: '¿Los traslados son compartidos o privados?',
    answer:
      'Todos nuestros traslados son privados: viajas solo con las personas de tu reserva, sin paradas adicionales.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div>
      <PageHero
        title="Preguntas Frecuentes"
        subtitle="Resolvemos las dudas más comunes sobre nuestro servicio de traslados."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={faq.question}>
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="font-semibold text-brand-950">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand-600 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-gray-600">
                    {faq.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
