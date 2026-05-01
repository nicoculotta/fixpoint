import { Plus } from "lucide-react"
import PropertiesTable from "./components/PropertiesTable"
import { useProperties } from "./hooks/useProperties"
import { Button } from "@/components/ui/button"
import PropertyDetailDrawer from "./components/PropertyDetailDrawer"
import { useState } from "react"


const PropertiesPage = () => {

  const { data, isLoading, error } = useProperties()
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  const onPropertySelect = (propertyId: string) => {
    setSelectedPropertyId(propertyId)
    setIsOpen(true)
  }

  const onClose = () => {
    setSelectedPropertyId(null)
    setIsOpen(false)
  }


  return (
    <div>
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Propiedades</h1>
          <p className="text-muted-foreground">
            Listado de propiedades
          </p>
        </div>
        <Button variant="default">
          <Plus className="h-4 w-4 text-white" />
          Nueva propiedad
        </Button>
      </div>
      <div className="mt-6">
        <PropertiesTable properties={data} onPropertySelect={onPropertySelect} />
      </div>
      <PropertyDetailDrawer propertyId={selectedPropertyId} isOpen={isOpen} onClose={onClose} />
    </div>
  )
}

export default PropertiesPage


