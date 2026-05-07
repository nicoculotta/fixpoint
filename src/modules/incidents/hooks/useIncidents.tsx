import { IncidentService } from '@/services/incident/incident.service'
import { useQuery } from '@tanstack/react-query'

export const useIncidents = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['incidents'],
    queryFn: () => IncidentService.getAll(),
  })

  return { data, isLoading, error }
}
