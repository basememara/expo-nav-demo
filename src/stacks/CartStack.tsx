import { Cart } from '@/screens/Cart';
import { stackScreenDefaults } from '@/utils/navigationUtils';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const CartStack = () => (
  <Stack.Navigator initialRouteName="cart" screenOptions={stackScreenDefaults}>
    <Stack.Screen name="cart" component={Cart} />
  </Stack.Navigator>
);
