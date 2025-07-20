import { SafeAreaView } from 'react-native-safe-area-context'
import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack'
import { AppStackParamList } from '../../interfaces/routeParams'
import ActivityListScreen from '../../screens/ActivityListScreen'
import ActivityDetailsScreen from '../../screens/ActivityDetailsScreen'

const AppStack = createStackNavigator<AppStackParamList>()

const AppNavigation = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
    </SafeAreaView>
  )
}

export default AppNavigation
