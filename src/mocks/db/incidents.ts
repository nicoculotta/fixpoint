/* eslint-disable prefer-const */

export type IncidentStatus =
  | 'pending'
  | 'in_progress'
  | 'resolved'

export type IncidentPriority =
  | 'low'
  | 'medium'
  | 'high'

export type Incident = {
  id: string
  propertyId: string
  title: string
  description: string
  status: IncidentStatus
  priority: IncidentPriority
  assignedTo?: string
  dueDate?: string
  createdAt: string
  updatedAt: string
}

export let incidents: Incident[] = [
  {
    id: 'i1',
    propertyId: 'p1',
    title: 'Water leak',
    description: 'Leak in apartment 3B',
    status: 'pending',
    priority: 'high',
    assignedTo: 'e1',
    dueDate: '2026-05-10',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'i2',
    propertyId: 'p2',
    title: 'Electricity outage',
    description: 'Outage in apartment 4A',
    status: 'in_progress',
    priority: 'medium',
    assignedTo: 'e2',
    dueDate: '2026-05-11',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'i3',
    propertyId: 'p3',
    title: 'Maintenance request',
    description: 'Maintenance request for apartment 5B',
    status: 'resolved',
    priority: 'low',
    assignedTo: 'e3',
    dueDate: '2026-05-12',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'i4',
    propertyId: 'p4',
    title: 'Security issue',
    description: 'Security issue in apartment 6A',
    status: 'pending',
    priority: 'high',
    assignedTo: 'e4',
    dueDate: '2026-05-13',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'i5',
    propertyId: 'p5',
    title: 'Plumbing problem',
    description: 'Plumbing problem in apartment 7B',
    status: 'in_progress',
    priority: 'medium',
    assignedTo: 'e5',
    dueDate: '2026-05-14',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'i6',
    propertyId: 'p6',
    title: 'Maintenance request',
    description: 'Maintenance request for apartment 8B',
    status: 'resolved',
    priority: 'low',
    assignedTo: 'e6',
    dueDate: '2026-05-15',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]