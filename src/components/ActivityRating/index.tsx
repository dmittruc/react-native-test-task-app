import tw from 'twrnc'
import StarIcon from '@assets/icons/star.svg'
import { Text, View } from 'react-native'

interface ActivityRatingProps {
  rating: number
  price: number
}

const ActivityRating = ({ rating, price }: ActivityRatingProps) => {
  return (
    <View>
      <View style={tw`flex-row`}>
        <StarIcon style={tw`mr-1`} />
        <Text style={tw`text-md text-black`}>{rating}</Text>
      </View>

      <View style={tw`flex-row items-baseline`}>
        <Text style={tw`mr-1 text-lg text-black`}>${price}.00</Text>
        <Text style={tw`text-sm`}>/ night</Text>
      </View>
    </View>
  )
}

export default ActivityRating
