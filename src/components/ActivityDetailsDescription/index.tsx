import { View, Text } from 'react-native'
import tw from 'twrnc'

interface ActivityDetailsDescriptionProps {
  name: string
  price: number
  description: string
}

const ActivityDetailsDescription = ({
  name,
  price,
  description,
}: ActivityDetailsDescriptionProps) => {
  return (
    <View style={tw`gap-10 p-6`}>
      <Text style={tw`text-2xl text-black`}>{name}</Text>

      <View style={tw`flex-row justify-between items-end`}>
        <Text style={tw`text-base text-black`}>${price.toFixed(2)}</Text>
        <Text style={tw`text-sm`}>Included taxes and fees</Text>
      </View>

      <View>
        <Text style={tw`text-base pb-1 text-black`}>Description</Text>
        <Text>{description}</Text>
      </View>
    </View>
  )
}

export default ActivityDetailsDescription
