import { ActivityIndicator, FlatList, Text } from 'react-native'
import tw from 'twrnc'
import ActivityCardItem from '@components/ActivityListItem'
import useActivities from 'api/activities/useActivities'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { AppStackParamList } from 'interfaces/routeParams'
import { IActivity } from 'interfaces'

const ActivityListScreen = () => {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>()

  const handleNavigateDetails = (activity: IActivity) => {
    navigation.navigate('ActivityDetails', { activity })
  }

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
        renderItem={({ item }) => (
          <ActivityCardItem
            activity={item}
            onPress={() => handleNavigateDetails(item)}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  )
}

export default ActivityListScreen
