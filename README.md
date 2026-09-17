# AeroTrans — Front

Sitio web de reservas de traslados privados (aeropuerto y ciudad), inspirado
en servicios como mytransfers.com. Construido con React + Vite + TypeScript
y Tailwind CSS v4.

## Estructura

```
src/
  components/
    layout/      Header, Footer, PublicLayout, AdminLayout
    booking/     Formulario de búsqueda de traslados
    ui/          Componentes reutilizables (Button, Badge, PageHero)
  pages/
    public/      Home, Destinos, Nosotros, FAQ, Contacto, Resultados, Checkout
    admin/       Login, Panel, Reservas, Choferes, Vehículos, Precios
  data/          Datos de ejemplo (mock) mientras no hay backend
  types/         Tipos del dominio (reservas, vehículos, choferes)
```

## Rutas

**Público**
- `/` — Home con buscador de traslados
- `/destinos` — Destinos disponibles
- `/nosotros` — Sobre la empresa
- `/preguntas-frecuentes` — FAQ
- `/contacto` — Formulario de contacto
- `/resultados` — Resultados de búsqueda (selección de vehículo)
- `/checkout` — Confirmación de reserva

**Administración**
- `/admin/login` — Ingreso
- `/admin` — Panel de control
- `/admin/reservas` — Gestión de reservas
- `/admin/choferes` — Gestión de choferes
- `/admin/vehiculos` — Gestión de flota
- `/admin/precios` — Precios por tipo de vehículo

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción
npm run lint      # oxlint
```

## Pendiente

Todos los datos (reservas, choferes, vehículos, precios) son mock en
`src/data/mock.ts`. El siguiente paso es conectar un backend real (API de
reservas, autenticación de administrador y pasarela de pago).
