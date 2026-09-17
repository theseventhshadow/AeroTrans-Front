import { Mail, MapPin, MessageCircle, Phone, Share2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-auto bg-brand-950 text-brand-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-lg font-bold text-white">
              A
            </span>
            <span className="text-xl font-bold text-white">AeroTrans</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-brand-200">
            Traslados privados puntuales y seguros desde y hacia el
            aeropuerto, para toda la ciudad.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              aria-label="Redes sociales"
            >
              <Share2 className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Navegación</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-brand-200">
            <li>
              <Link to="/" className="hover:text-white">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/destinos" className="hover:text-white">
                Destinos
              </Link>
            </li>
            <li>
              <Link to="/nosotros" className="hover:text-white">
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="/preguntas-frecuentes" className="hover:text-white">
                Preguntas Frecuentes
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Servicios</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-brand-200">
            <li>Traslados al aeropuerto</li>
            <li>Traslados corporativos</li>
            <li>Excursiones de un día</li>
            <li>Servicio por horas</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Contacto</h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-200">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              +56 2 2345 6789
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              contacto@aerotrans.cl
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              Av. Aeropuerto 1234, Santiago, Chile
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-brand-300 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} AeroTrans. Todos los derechos
        reservados.
      </div>
    </footer>
  )
}
