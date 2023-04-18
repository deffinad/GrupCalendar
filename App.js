import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Main } from './pages/Main';
import { Login } from './pages/Login';
import { DetailKegiatan } from './pages/DetailKegiatan';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Main' component={Main} />
        <Stack.Screen name='DetailKegiatan' component={DetailKegiatan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}