import { Plus } from 'lucide-react'
import PropertiesTable from './components/PropertiesTable'
import { useProperties } from './hooks/useProperties'
import { Button } from '@/components/ui/button'
import PropertyDetailDrawer from './components/PropertyDetailDrawer'
import HeaderSection from '@/components/common/HeaderSection'
import { useSearchParams } from 'react-router'
import { useDebounce } from '../common/hooks/useDebounce'
import { Input } from '@/components/ui/input'

const SEARCH_DEBOUNCE_MS = 300

const PropertiesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchQuery = searchParams.get('search') || ''
  const selectedPropertyId = searchParams.get('id') || null

  const debouncedSearch = useDebounce(searchQuery, SEARCH_DEBOUNCE_MS)
  const apiSearch = debouncedSearch.length > 0 ? debouncedSearch : undefined

  const { data, isLoading, error } = useProperties(apiSearch)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  const onSearch = (value: string) => {
    setSearchParams({ search: value })
    if (value.length === 0) {
      setSearchParams({})
    }
  }

  const onPropertySelect = (propertyId: string) => {
    setSearchParams({ id: propertyId })
  }

  const onClose = () => {
    setSearchParams({})
  }

  return (
    <div>
      <HeaderSection
        title="Propiedades"
        description="Listado de propiedades"
        actions={
          <Button role="toolbar" aria-label="Nueva propiedad" variant="default">
            <Plus className="h-4 w-4 text-white" /> Nueva propiedad
          </Button>
        }
      />

      <div className="mt-6 space-y-4">
        <div className="relative max-w-md">
          <Input
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Buscar por nombre o dirección…"
            aria-label="Buscar propiedades"
          />
        </div>
        <PropertiesTable
          properties={data ?? []}
          onPropertySelect={onPropertySelect}
        />
      </div>
      <PropertyDetailDrawer
        propertyId={selectedPropertyId}
        isOpen={!!selectedPropertyId}
        onClose={onClose}
      />
    </div>
  )
}

export default PropertiesPage
