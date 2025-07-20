import { Text, View } from 'react-native'
import ActivityCardItem from '../../components/ActivityCardItem'
import tw from 'twrnc'

const ActivityListScreen = () => {
  return (
    <View style={tw`flex-1 p-4 bg-white`}>
      <Text style={tw`text-lg font-bold mb-4`}>Activity list screen</Text>
      <ActivityCardItem />
      <ActivityCardItem />
      <ActivityCardItem />
    </View>
  )
}

export default ActivityListScreen
