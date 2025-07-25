import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack'
import tw from 'twrnc'
import { View } from 'react-native'
import ActivityDetailsScreen from '@screens/ActivityDetailsScreen/ActivityDetailsScreen'
import ActivityListScreen from '@screens/ActivityListScreen/ActivityListScreen'
import { AppStackParamList } from 'interfaces/routeParams'
import BackButton from '@components/BackButton'

const AppStack = createStackNavigator<AppStackParamList>()

const AppNavigation = () => {
  return (
    <View style={tw`flex-1 bg-white`}>
      <AppStack.Navigator
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <AppStack.Screen
          name="ActivityList"
          component={ActivityListScreen}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name="ActivityDetails"
          component={ActivityDetailsScreen}
          options={{
            headerTransparent: true,
            headerTitle: '',
            headerShadowVisible: false,
            headerLeft: BackButton,
          }}
        />
      </AppStack.Navigator>
    </View>
  )
}

export default AppNavigation
