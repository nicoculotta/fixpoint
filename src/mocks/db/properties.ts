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
]