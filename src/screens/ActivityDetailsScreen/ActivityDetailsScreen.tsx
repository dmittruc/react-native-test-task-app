import LeftArrowIcon from '@assets/icons/left-arrow.svg'
import { View, Image, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import ActivityDetailsDescription from '@components/ActivityDetailsDescription'
import FavouritesButton from '@components/FavouritesButton'
import useActivitiesMutation from 'api/activities/useActivitiesMutation'
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { AppStackParamList } from 'interfaces/routeParams'

const ActivityDetailsScreen = () => {
  const route = useRoute<RouteProp<AppStackParamList, 'ActivityDetails'>>()
  const activity = route.params.activity

  const { mutate } = useActivitiesMutation()

  const navigation = useNavigation<NavigationProp<AppStackParamList>>()

  const { name, price, description, photoUrl, id } = activity

  return (
    <View style={tw`flex-1 bg-white`}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={tw`absolute top-12 left-4 z-1 bg-white rounded-full p-2`}
      >
        <LeftArrowIcon style={tw`m-3`} />
      </TouchableOpacity>

      {photoUrl && (
        <Image
          source={{ uri: photoUrl }}
          style={tw`w-full h-45% rounded-b-20px`}
        />
      )}

      <ActivityDetailsDescription
        name={name}
        price={price}
        description={description}
      />
      <FavouritesButton onPress={() => mutate(id)} />
    </View>
  )
}

export default ActivityDetailsScreen
