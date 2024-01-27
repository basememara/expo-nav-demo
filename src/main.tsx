import { HomeStack } from '@/screens/Home';
import { MoreStack } from '@/screens/More';
import { SettingsStack } from '@/screens/Settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import { BlurView } from 'expo-blur';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              ...(Platform.OS === 'ios'
                ? {
                    tabBarStyle: { position: 'absolute', elevation: 0 },
                    tabBarBackground: () => (
                      <BlurView tint="prominent" intensity={100} style={StyleSheet.absoluteFill} />
                    )
                  }
                : undefined)
            }}
          >
            <Tab.Screen name="HomeTab" component={HomeStack} />
            <Tab.Screen name="SettingsTab" component={SettingsStack} />
            <Tab.Screen name="MoreTab" component={MoreStack} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
      <StatusBar style="auto" />
    </>
  );
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
