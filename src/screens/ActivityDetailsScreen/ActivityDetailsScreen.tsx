import { View, Image } from 'react-native'
import tw from 'twrnc'
import ActivityDetailsDescription from '@components/ActivityDetailsDescription'
import FavouritesButton from '@components/FavouritesButton'
import useActivitiesMutation from 'api/activities/useActivitiesMutation'
import { RouteProp, useRoute } from '@react-navigation/native'
import { AppStackParamList } from 'interfaces/routeParams'

const ActivityDetailsScreen = () => {
  const route = useRoute<RouteProp<AppStackParamList, 'ActivityDetails'>>()
  const activity = route.params.activity

  const { mutate } = useActivitiesMutation()

  const { name, price, description, photoUrl, id } = activity

  return (
    <View style={tw`flex-1 bg-white`}>
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
