import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { AppStackParamList } from '../../interfaces/routeParams'
import { View, Text, Image, Pressable, Alert } from 'react-native'
import tw from 'twrnc'
import { useMutation } from '@tanstack/react-query'
import { addFavoriteApi } from '../../api/favoritesApi'
import LeftArrowIcon from '../../assets/icons/Vector.svg'

const ActivityDetailsScreen = () => {
  const route = useRoute<RouteProp<AppStackParamList, 'ActivityDetails'>>()
  const activity = route.params.activity
  const { name, price, description, photoUrl, id } = activity
  const navigation = useNavigation<NavigationProp<AppStackParamList>>()

  const { mutate } = useMutation({
    mutationFn: () => addFavoriteApi(id),
    onSuccess: message => {
      Alert.alert(message)
    },
    onError: () => {
      Alert.alert('Error', 'Probably wrong ID, or bad network connection')
    },
  })

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
      <View style={tw`gap-10 p-6`}>
        <Text style={tw`text-2xl`}>{name}</Text>
        <View style={tw`flex-row justify-between items-end`}>
          <Text style={tw`text-base`}>${price}.00</Text>
          <Text style={tw`text-sm`}>Included taxes and fees</Text>
        </View>
        <View>
          <Text style={tw`text-base pb-1`}>Description</Text>
          <Text>{description}</Text>
        </View>
      </View>
      <Pressable
        style={tw`absolute bottom-1 left-0 right-0`}
        onPress={() => mutate()}
      >
        <View style={tw`bg-black rounded-full mx-6 p-5`}>
          <Text style={tw`text-white text-center text-lg`}>
            Add to Favorites
          </Text>
        </View>
      </Pressable>
    </View>
  )
}

export default ActivityDetailsScreen
