import { DataTable } from '../../../components/common/DataTable'
import type { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import type { Incident, IncidentPriority } from '@/services/incident/incident.types'
import { SignalHigh, SignalLow, SignalMedium } from 'lucide-react'

interface IncidentsTableProps {
  incidents: Incident[]
  onIncidentSelect: (propertyId: string) => void
}

const IncidentsTable = ({ incidents, onIncidentSelect }: IncidentsTableProps) => {

  const statusBadgeColors = {
    pending: {
      color: 'bg-blue-100 text-blue-900',
      text: 'Pendiente',
    },
    in_progress: {
      color: 'bg-yellow-100 text-yellow-900',
      text: 'En progreso',
    },
    resolved: {
      color: 'bg-green-100 text-green-900',
      text: 'Hecho',
    },
  }

  const columns: ColumnDef<Incident>[] = [
    {
      header: 'Título',
      cell: ({ row }) => {
        return <Button variant="link" size="sm" onClick={() => onIncidentSelect(row.original.id)}>{row.original.title}</Button>
      },
    },
    {
      header: 'Descripción',
      accessorKey: 'description',
    },
    {
      header: 'Estado',
      cell: ({ row }) => {
        return <span className={`${statusBadgeColors[row.original.status].color} text-xs font-medium px-2 py-1 rounded-full`}>{statusBadgeColors[row.original.status].text}</span>
      },
    },
    {
      header: 'Fecha de vencimiento',
      accessorKey: 'dueDate',
    },
    {
      header: 'Prioridad',
      cell: ({ row }) => {
        return <PriorityBadge priority={row.original.priority} />
      },
    },
    {
      header: 'Asignado a',
      accessorKey: 'assignedTo',
    },
  ]
  return (
    <DataTable columns={columns} data={incidents} pageSize={10} />
  )
}

export default IncidentsTable



const PriorityBadge = ({ priority }: { priority: IncidentPriority }) => {

  const priorityBadge = {
    low: {
      color: 'text-stone-500',
      text: 'Baja',
      icon: <SignalLow className="h-4 w-4" />,
    },
    medium: {
      color: 'text-orange-500',
      text: 'Media',
      icon: <SignalMedium className="h-4 w-4" />,
    },
    high: {
      color: 'text-red-500',
      text: 'Alta',
      icon: <SignalHigh className="h-4 w-4" />,
    },
  } 
  return (
    <div className={`flex items-center gap-2 ${priorityBadge[priority].color} text-xs font-medium px-2 py-1 rounded-full`}>
     {priorityBadge[priority].icon}
    <span>{priorityBadge[priority].text}</span>
    </div>
  )
}
