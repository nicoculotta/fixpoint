import { useQuery } from "@tanstack/react-query"
import { getProperties } from "../../../api/properties"

export const useProperties = (search?: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['properties', search],
    queryFn: () => getProperties(search),
  })

  return { data, isLoading, error }
}