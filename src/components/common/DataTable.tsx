import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/Table';
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react';

/**
 * Props para el componente DataTable
 * @template TData - Tipo de datos de la tabla
 * @template TValue - Tipo de valor de las columnas
 */
interface DataTableProps<TData, TValue> {
  /** Definición de las columnas de la tabla */
  columns: ColumnDef<TData, TValue>[];
  /** Datos a mostrar en la tabla */
  data: TData[];
  /** Contenido opcional para renderizar encima de la tabla (ej: filtros) */
  toolbarContent?: React.ReactNode;
  /** Número de filas por página (default: 10) */
  pageSize?: number;
}

/**
 * Componente DataTable genérico y reutilizable
 * Proporciona funcionalidad de tabla con filtrado y paginación
 * usando TanStack Table (React Table v8)
 *
 * @example
 * ```tsx
 * <DataTable
 *   columns={columns}
 *   data={data}
 *   toolbarContent={<CustomFilters />}
 *   pageSize={20}
 * />
 * ```
 */
export function DataTable<TData, TValue>({
  columns,
  data,
  toolbarContent,
  pageSize = 10,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
      sorting,
    },
    initialState: {
      pagination: {
        pageSize,
      },
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="space-y-4">
      {/* Área de toolbar (filtros, búsqueda, etc.) */}
      {toolbarContent}

      {/* Tabla */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : (
                      <div
                        className={
                          header.column.getCanSort()
                            ? 'flex items-center gap-2 cursor-pointer select-none'
                            : ''
                        }
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {/* Indicador de ordenamiento */}
                        {header.column.getCanSort() && (
                          <span className="ml-2">
                            {header.column.getIsSorted() === 'asc' ? (
                              <ArrowUp className="h-4 w-4" />
                            ) : header.column.getIsSorted() === 'desc' ? (
                              <ArrowDown className="h-4 w-4" />
                            ) : (
                              <ArrowUpDown className="h-4 w-4 opacity-50" />
                            )}
                          </span>
                        )}
                      </div>
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No se encontraron resultados.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Paginación */}
      <div className="flex items-center justify-between space-x-2">
        <div className="text-sm text-muted-foreground">
          Mostrando {table.getState().pagination.pageIndex * pageSize + 1} -{' '}
          {Math.min(
            (table.getState().pagination.pageIndex + 1) * pageSize,
            data.length
          )}{' '}
          de {data.length} resultados
        </div>
        <div className="flex space-x-2">
          <button
            className="px-4 py-2 bg-gray-200 rounded-md"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Anterior
          </button>
          <button
            className="px-4 py-2 bg-gray-200 rounded-md"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}
