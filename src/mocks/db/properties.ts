/* eslint-disable prefer-const */
export type Property = {
  id: string
  name: string
  address: string
  city: string
  units: number
  managerId: string
  createdAt: string
}


export let properties: Property[] = [
  {
    id: 'p1',
    name: 'Sunset Apartments',
    address: '123 Main St',
    city: 'Malaga',
    units: 12,
    managerId: 'e1',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'p2',
    name: 'Ocean View Building',
    address: '456 Beach Ave',
    city: 'Marbella',
    units: 20,
    managerId: 'e2',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'p3',
    name: 'Puerto Banús Residences',
    address: 'Calle Ribera 18',
    city: 'Marbella',
    units: 8,
    managerId: 'e3',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'p4',
    name: 'Atarazanas Lofts',
    address: 'Plaza de la Constitución 4',
    city: 'Malaga',
    units: 16,
    managerId: 'e1',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'p5',
    name: 'Nerja Cliffs',
    address: 'Calle Carabeo 22',
    city: 'Nerja',
    units: 6,
    managerId: 'e2',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'p6',
    name: 'Torremolinos Gardens',
    address: 'Av. Palma de Mallorca 45',
    city: 'Torremolinos',
    units: 24,
    managerId: 'e1',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'p7',
    name: 'Estepona Marina',
    address: 'Puerto Deportivo s/n',
    city: 'Estepona',
    units: 10,
    managerId: 'e3',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'p8',
    name: 'Benalmádena Vista',
    address: 'Av. Antonio Machado 101',
    city: 'Benalmádena',
    units: 32,
    managerId: 'e2',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'p9',
    name: 'Ronda Old Town',
    address: 'Calle Espinel 7',
    city: 'Ronda',
    units: 4,
    managerId: 'e3',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'p10',
    name: 'Fuengirola Central',
    address: 'Calle Mallorca 33',
    city: 'Fuengirola',
    units: 18,
    managerId: 'e1',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'p11',
    name: 'Mijas Pueblo Suites',
    address: 'Plaza Virgen de la Peña 2',
    city: 'Mijas',
    units: 14,
    managerId: 'e2',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'p12',
    name: 'Alhaurín Green',
    address: 'Calle Coín 55',
    city: 'Alhaurín de la Torre',
    units: 22,
    managerId: 'e3',
    createdAt: new Date().toISOString(),
  },
]