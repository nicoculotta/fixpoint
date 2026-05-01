import { Drawer, DrawerContent, DrawerFooter } from "@/components/ui/drawer"
import { DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { useProperty } from "../hooks/useProperty"
import { Button } from "@/components/ui/button"

interface PropertyDetailDrawerProps {
  propertyId: string
  isOpen: boolean
  onClose: () => void
}

const PropertyDetailDrawer = ({ propertyId, isOpen, onClose }: PropertyDetailDrawerProps) => {
  const { data, isLoading, error } = useProperty(propertyId)

  return (
    <Drawer open={isOpen} onOpenChange={onClose} direction="right">
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{data?.name}</DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col gap-4">
          {isLoading && <div>Loading...</div>}
          {error && <div>Error: {error.message}</div>}
          {data && (
            <div>
              <h2>Dirección</h2>
              <p>{data?.address}</p>
              <p>{data?.city}</p>
              <p>{data?.units}</p>
              <p>{data?.managerId}</p>
            </div>
          )}
        </div>
        <DrawerFooter>
          <Button onClick={onClose}>Cerrar</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default PropertyDetailDrawer