import LeftArrowIcon from '@assets/icons/left-arrow.svg'
import { View, Image, Pressable } from 'react-native'
import tw from 'twrnc'
import useFavourites from 'api/favourites/useFavourites'
import useNavigateHook from 'hooks/useNavigateHook'
import useRouteHook from 'hooks/useRouteHook'
import ActivityDetailsDescription from '@components/ActivityDetailsDescription'
import FavouritesButton from '@components/FavouritesButton'

const ActivityDetailsScreen = () => {
  const { activity } = useRouteHook()
  const { navigation } = useNavigateHook({ activity })
  const { mutate } = useFavourites()

  const { name, price, description, photoUrl, id } = activity

  return (
    <View style={tw`flex-1 bg-white`}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={tw`absolute top-12 left-4 z-1 bg-white rounded-full p-2`}
      >
        <LeftArrowIcon style={tw`m-3`} />
      </Pressable>

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
