import { View } from 'react-native'
import MapPinIcon from '@assets/icons/map.svg'
import tw from 'twrnc'
import { Text } from 'react-native'

interface ActivityInfoProps {
  name: string
  location: string
}

const ActivityInfo = ({ name, location }: ActivityInfoProps) => {
  return (
    <View>
      <View>
        <Text style={tw`text-lg text-black`}>{name}</Text>
      </View>
      <View style={tw`flex-row`}>
        <MapPinIcon style={tw`mr-1`} />
        <Text style={tw`text-md text-black`}>{location}</Text>
      </View>
    </View>
  )
}

export default ActivityInfo
