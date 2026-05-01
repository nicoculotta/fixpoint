import { PropertyService } from "@/services/property/property.service"
import { useQuery } from "@tanstack/react-query"

export const useProperty = (propertyId: string | null) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['property', propertyId],
    queryFn: () => PropertyService.getById(propertyId),
    enabled: Boolean(propertyId),
  })

  return { data, isLoading, error }
}