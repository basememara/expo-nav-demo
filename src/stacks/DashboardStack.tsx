import { Dashboard } from '@/screens/Dashboard';
import { Order } from '@/screens/delivery/Order';
import { stackScreenDefaults } from '@/utils/navigationUtils';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const DashboardStack = () => (
  <Stack.Navigator initialRouteName="dashboard" screenOptions={stackScreenDefaults}>
    <Stack.Screen name="dashboard" component={Dashboard} />
    <Stack.Screen name="order2" component={Order} />
  </Stack.Navigator>
);
