export type TripType = 'ida' | 'ida-vuelta'

export interface BookingSearch {
  tripType: TripType
  origin: string
  destination: string
  departureDate: string
  departureTime: string
  returnDate?: string
  returnTime?: string
  passengers: number
}

export interface VehicleOption {
  id: string
  name: string
  description: string
  maxPassengers: number
  maxLuggage: number
  pricePerTrip: number
  image: string
}

export type BookingStatus =
  | 'pendiente'
  | 'confirmada'
  | 'en-curso'
  | 'completada'
  | 'cancelada'

export interface Booking {
  id: string
  createdAt: string
  customerName: string
  customerEmail: string
  customerPhone: string
  origin: string
  destination: string
  date: string
  time: string
  passengers: number
  vehicle: string
  driver?: string
  status: BookingStatus
  price: number
}

export interface Driver {
  id: string
  name: string
  phone: string
  license: string
  vehicleAssigned?: string
  status: 'activo' | 'inactivo'
  rating: number
}

export interface Vehicle {
  id: string
  plate: string
  model: string
  type: string
  capacity: number
  status: 'disponible' | 'en-servicio' | 'mantenimiento'
}

export interface Destination {
  id: string
  name: string
  description: string
  image: string
  fromPrice: number
}
