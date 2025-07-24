import { useQuery } from '@tanstack/react-query'
import { getActivitiesApi } from './actions'

const useActivities = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['activities'],
    queryFn: getActivitiesApi,
  })

  return { data, isLoading }
}

export default useActivities
