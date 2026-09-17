import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLayout from './components/layout/AdminLayout'
import PublicLayout from './components/layout/PublicLayout'
import AdminBookings from './pages/admin/Bookings'
import AdminDashboard from './pages/admin/Dashboard'
import AdminDrivers from './pages/admin/Drivers'
import AdminLogin from './pages/admin/Login'
import AdminPricing from './pages/admin/Pricing'
import AdminVehicles from './pages/admin/Vehicles'
import About from './pages/public/About'
import BookingResults from './pages/public/BookingResults'
import Checkout from './pages/public/Checkout'
import Contact from './pages/public/Contact'
import Destinations from './pages/public/Destinations'
import FAQ from './pages/public/FAQ'
import Home from './pages/public/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="destinos" element={<Destinations />} />
          <Route path="nosotros" element={<About />} />
          <Route path="preguntas-frecuentes" element={<FAQ />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="resultados" element={<BookingResults />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>

        <Route path="admin/login" element={<AdminLogin />} />
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="reservas" element={<AdminBookings />} />
          <Route path="choferes" element={<AdminDrivers />} />
          <Route path="vehiculos" element={<AdminVehicles />} />
          <Route path="precios" element={<AdminPricing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
