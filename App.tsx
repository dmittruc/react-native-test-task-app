import { NavigationContainer } from '@react-navigation/native'
import AppNavigation from './src/components/AppNavigation'
import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Root = () => {
  return (
    <>
      <AppNavigation />
    </>
  )
}

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="transparent" translucent />
      <GestureHandlerRootView>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}

export default App
