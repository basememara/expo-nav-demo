import { Settings } from '@/screens/Settings';
import { Order } from '@/screens/delivery/Order';
import { stackScreenDefaults } from '@/utils/navigationUtils';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const SettingsStack = () => (
  <Stack.Navigator initialRouteName="settings" screenOptions={stackScreenDefaults}>
    <Stack.Screen name="settings" component={Settings} />
    <Stack.Screen name="order2" component={Order} />
  </Stack.Navigator>
);
