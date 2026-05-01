import type { Property } from '../../../types/properties'
import { DataTable } from '../../../components/common/DataTable'
import type { ColumnDef } from '@tanstack/react-table'


const PropertiesTable = ({ properties }: { properties: Property[] }) => {

  const columns: ColumnDef<Property>[] = [
    {
      header: 'Nombre',
      accessorKey: 'name',
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
      header: 'ID del manager',
      accessorKey: 'managerId',
    },
  ]
  return (
    <DataTable columns={columns} data={properties} pageSize={10} />
  )
}

export default PropertiesTable