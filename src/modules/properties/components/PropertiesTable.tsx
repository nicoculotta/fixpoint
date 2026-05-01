import type { Property } from '../../../types/properties'
import { DataTable } from '../../../components/common/DataTable'
import type { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'

interface PropertiesTableProps {
  properties: Property[]
  onPropertySelect: (propertyId: string) => void
}

const PropertiesTable = ({ properties, onPropertySelect }: PropertiesTableProps) => {

  const columns: ColumnDef<Property>[] = [
    {
      header: 'Nombre',
      cell: ({ row }) => {
        return <Button variant="link" size="sm" onClick={() => onPropertySelect(row.original.id)}>{row.original.name}</Button>
      },
    },
    {
      header: 'Dirección',
      accessorKey: 'address',
    },
    {
      header: 'Ciudad',
      accessorKey: 'city',
    },
    {
      header: 'Unidades',
      accessorKey: 'units',
    },
    {
      header: 'Responsable',
      accessorKey: 'managerId',
    },
  ]
  return (
    <DataTable columns={columns} data={properties} pageSize={10} />
  )
}

export default PropertiesTable