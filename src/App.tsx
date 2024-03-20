import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import RootNavigator from './routes';
import { ToastConfig } from './utils/Toast';


const App = () => {
  return (
    <SafeAreaProvider>
      <RootNavigator />
      <Toast config={ToastConfig} />
    </SafeAreaProvider>
  )
}

export default App;