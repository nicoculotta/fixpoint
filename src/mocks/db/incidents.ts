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
]