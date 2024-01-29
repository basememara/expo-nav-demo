import { Products } from '@/screens/Products';
import { stackScreenDefaults } from '@/utils/navigationUtils';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const ProductsStack = () => (
  <Stack.Navigator initialRouteName="products" screenOptions={stackScreenDefaults}>
    <Stack.Screen name="products" component={Products} />
  </Stack.Navigator>
);
