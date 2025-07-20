import { Text, View } from 'react-native'
import tw from 'twrnc'

const ActivityCardItem = () => {
  return (
    <View>
      <View style={tw`rounded-xl p-4 bg-gray-200`}>
        <Text>IMAGE</Text>
      </View>
      <View
        style={tw`bg-gray-100 p-4 rounded-xl h-85px flex-row justify-between items-center`}
      >
        <View>
          <View>
            <Text style={tw`text-lg`}>Activitie Name</Text>
          </View>
          <View style={tw`flex-row`}>
            <Text style={tw`pr-1`}>icn</Text>
            <Text style={tw`text-md`}>Location</Text>
          </View>
        </View>
        <View>
          <View style={tw`flex-row`}>
            <Text style={tw`pr-1`}>icn</Text>
            <Text style={tw`text-md`}>Rate</Text>
          </View>
          <View style={tw`flex-row items-end`}>
            <Text style={tw`pr-1 text-lg`}>$123</Text>
            <Text style={tw`text-sm`}>/ night</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ActivityCardItem
