import { CartStack } from '@/stacks/CartStack';
import { DashboardStack } from '@/stacks/DashboardStack';
import { ProductsStack } from '@/stacks/ProductsStack';
import { SettingsStack } from '@/stacks/SettingsStack';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { Platform, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export const Home = () => (
  <Tab.Navigator
    initialRouteName="dashboardTab"
    screenOptions={{
      lazy: false, // Ensure tab root stack always available
      headerShown: false,
      ...(Platform.OS === 'ios' && {
        tabBarStyle: { position: 'absolute' },
        tabBarBackground: () => <BlurView tint="prominent" intensity={100} style={StyleSheet.absoluteFill} />
      })
    }}
  >
    <Tab.Screen
      name="dashboardTab"
      component={DashboardStack}
      options={{
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({ color, size }) => <Feather name="layout" color={color} size={size} />
      }}
    />
    <Tab.Screen
      name="productsTab"
      component={ProductsStack}
      options={{
        tabBarLabel: 'Products',
        tabBarIcon: ({ color, size }) => <Feather name="tag" color={color} size={size} />
      }}
    />
    <Tab.Screen
      name="cartTab"
      component={CartStack}
      options={{
        tabBarLabel: 'Cart',
        tabBarIcon: ({ color, size }) => <Feather name="shopping-cart" color={color} size={size} />
      }}
    />
    <Tab.Screen
      name="settingsTab"
      component={SettingsStack}
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color, size }) => <Feather name="settings" color={color} size={size} />
      }}
    />
  </Tab.Navigator>
);
