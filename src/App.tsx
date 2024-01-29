import { Home } from '@/Home';
import { Order } from '@/screens/delivery/Order';
import { stackScreenDefaults } from '@/utils/navigationUtils';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const App = () => (
  <>
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home" screenOptions={stackScreenDefaults}>
          <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="order" component={Order} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    <StatusBar style="auto" />
  </>
);

// Required for projects without prebuild iOS or Android projects
// to ensure app loaded properly in Expo Go or in native build
registerRootComponent(App);
