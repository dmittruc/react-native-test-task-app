import { TouchableOpacity } from 'react-native-gesture-handler'
import tw from 'twrnc'
import LeftArrowIcon from '@assets/icons/left-arrow.svg'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { AppStackParamList } from 'interfaces/routeParams'

const BackButton = () => {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>()

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={tw`left-4 bg-white rounded-full p-5`}
    >
      <LeftArrowIcon />
    </TouchableOpacity>
  )
}

export default BackButton
