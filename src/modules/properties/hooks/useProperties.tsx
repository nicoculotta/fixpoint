import { useQuery } from "@tanstack/react-query"
import { PropertyService } from "../../../services/property/property.service"

export const useProperties = (search?: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['properties', search],
    queryFn: () => PropertyService.getAll(search),
  })

  return { data, isLoading, error }
}