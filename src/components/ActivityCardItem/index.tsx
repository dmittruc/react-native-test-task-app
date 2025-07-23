import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Text, View, Image, Pressable } from 'react-native'
import tw from 'twrnc'
import { AppStackParamList } from 'interfaces/routeParams'
import MapPinIcon from '@assets/icons/map.svg'
import StarIcon from '@assets/icons/star.svg'
import { IActivity } from 'interfaces'

interface ActivityCardItemsProps {
  activity: IActivity
}

const ActivityCardItem = ({ activity }: ActivityCardItemsProps) => {
  const { photoUrl, name, location, rating, price } = activity
  const navigation = useNavigation<NavigationProp<AppStackParamList>>()

  const handleNavigateDetails = () => {
    navigation.navigate('ActivityDetails', { activity })
  }

  return (
    <Pressable
      onPress={handleNavigateDetails}
      style={tw`mb-4 w-90% self-center`}
    >
      {photoUrl && (
        <View>
          <Image
            source={{ uri: photoUrl }}
            style={tw`w-full h-139px rounded-20px`}
          />
        </View>
      )}
      <View
        style={tw`bg-gray-50 p-4 rounded-20px h-85px flex-row justify-between items-center`}
      >
        <View>
          <View>
            <Text style={tw`text-lg`}>{name}</Text>
          </View>
          <View style={tw`flex-row`}>
            <MapPinIcon style={tw`mr-1`} />
            <Text style={tw`text-md`}>{location}</Text>
          </View>
        </View>
        <View>
          <View style={tw`flex-row`}>
            <StarIcon style={tw`mr-1`} />
            <Text style={tw`text-md`}>{rating}</Text>
          </View>
          <View style={tw`flex-row items-end`}>
            <Text style={tw`pr-1 text-lg`}>${price}.00</Text>
            <Text style={tw`text-sm`}>/ night</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

export default ActivityCardItem
