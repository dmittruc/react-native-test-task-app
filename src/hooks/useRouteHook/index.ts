import { RouteProp, useRoute } from '@react-navigation/native'
import { AppStackParamList } from 'interfaces/routeParams'

const useRouteHook = () => {
  const route = useRoute<RouteProp<AppStackParamList, 'ActivityDetails'>>()
  const activity = route.params.activity

  return { activity }
}

export default useRouteHook
