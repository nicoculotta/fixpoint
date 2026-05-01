export type Employee = {
  id: string
  name: string
  email: string
  avatar?: string
  createdAt: string
}

export const employees: Employee[] = [
  {
    id: 'e1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'e2',
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'e3',
    name: 'Jim Beam',
    email: 'jim.beam@example.com',
    createdAt: new Date().toISOString(),
  },
]