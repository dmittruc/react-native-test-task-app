import { ActivityIndicator, FlatList, Text } from 'react-native'
import tw from 'twrnc'
import ActivityCardItem from '@components/ActivityListItem'
import useActivities from 'api/activities/useActivities'
import { SafeAreaView } from 'react-native-safe-area-context'

const ActivityListScreen = () => {
  const { data, isLoading } = useActivities()
  if (isLoading) {
    return <ActivityIndicator />
  }
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <Text style={tw`text-base font-bold mb-8 text-center text-black`}>
        Activities
      </Text>

      <FlatList
        data={data}
        renderItem={({ item }) => <ActivityCardItem activity={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default ActivityListScreen
