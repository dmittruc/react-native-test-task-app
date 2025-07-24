import { NavigationProp, useNavigation } from '@react-navigation/native'
import { IActivity } from 'interfaces'
import { AppStackParamList } from 'interfaces/routeParams'

interface UseNavigateHookProps {
  activity: IActivity
}

const useNavigateHook = ({ activity }: UseNavigateHookProps) => {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>()
  const handleNavigateDetails = () => {
    navigation.navigate('ActivityDetails', { activity })
  }

  return { handleNavigateDetails, navigation }
}

export default useNavigateHook
