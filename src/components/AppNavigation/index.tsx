import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack'
import { AppStackParamList } from '../../interfaces/routeParams'
import ActivityListScreen from '../../screens/ActivityListScreen'
import ActivityDetailsScreen from '../../screens/ActivityDetailsScreen'
import tw from 'twrnc'
import { View } from 'react-native'

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
