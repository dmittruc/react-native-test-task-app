import { ActivityIndicator, FlatList, SafeAreaView, Text } from 'react-native'
import ActivityCardItem from '../../components/ActivityCardItem'
import tw from 'twrnc'
import { useQuery } from '@tanstack/react-query'
import { getActivitiesApi } from '../../api/activitiesApi'

const ActivityListScreen = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['activities'],
    queryFn: getActivitiesApi,
  })
  if (isLoading) {
    return <ActivityIndicator />
  }
  return (
    <SafeAreaView style={tw`flex-1 p-4 bg-white`}>
      <Text style={tw`text-base font-bold mb-8 text-center`}>Activities</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <ActivityCardItem activity={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default ActivityListScreen
