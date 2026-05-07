import { IncidentService } from "@/services/incident/incident.service"
import { useQuery } from "@tanstack/react-query"

export const useInsights = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['insights'],
    queryFn: () => IncidentService.getDataInsights(),
  })

  console.log(data)

  return { data, isLoading, error }
}