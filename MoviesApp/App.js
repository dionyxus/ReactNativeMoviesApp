import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'
import AppStack from './src/components/stacks/AppStack'
import AppTabs from './src/components/stacks/AppTabs'

const App = () => {
  return (
    <NativeBaseProvider>
      <AppTabs />
      <StatusBar style='auto' />
    </NativeBaseProvider>
  )
}

export default App
