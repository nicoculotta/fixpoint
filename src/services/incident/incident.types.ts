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

export type IncidentStatus = 'pending' | 'in_progress' | 'resolved'
export type IncidentPriority = 'low' | 'medium' | 'high'