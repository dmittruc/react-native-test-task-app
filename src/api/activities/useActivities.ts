import { useQuery } from '@tanstack/react-query'
import { getActivitiesApi } from './actions'

const useActivities = () => {
  const activitiesQuery = useQuery({
    queryKey: ['activities'],
    queryFn: getActivitiesApi,
  })

  return {
    data: activitiesQuery.data,
    isLoading: activitiesQuery.isLoading,
  }
}

export default useActivities
