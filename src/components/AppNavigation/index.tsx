import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack'
import tw from 'twrnc'
import { View } from 'react-native'
import ActivityDetailsScreen from '@screens/ActivityDetailsScreen/ActivityDetailsScreen'
import ActivityListScreen from '@screens/ActivityListScreen/ActivityListScreen'
import { AppStackParamList } from 'interfaces/routeParams'

const AppStack = createStackNavigator<AppStackParamList>()

const AppNavigation = () => {
  return (
    <View style={tw`flex-1 bg-white`}>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <AppStack.Screen name="ActivityList" component={ActivityListScreen} />
        <AppStack.Screen
          name="ActivityDetails"
          component={ActivityDetailsScreen}
        />
      </AppStack.Navigator>
    </View>
  )
}

export default AppNavigation
