import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Main } from './pages/Main';
import { Login } from './pages/Login';
import { DetailKegiatan } from './pages/DetailKegiatan';
import * as SplashScreen from 'expo-splash-screen'
import { TambahKegiatan } from './pages/TambahKegiatan';
import { Notification } from './pages/Notification';

const Stack = createNativeStackNavigator()

export default function App() {
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000)
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Main' component={Main} />
        <Stack.Screen name='DetailKegiatan' component={DetailKegiatan} />
        <Stack.Screen name='TambahKegiatan' component={TambahKegiatan} />
        <Stack.Screen name='Notification' component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}