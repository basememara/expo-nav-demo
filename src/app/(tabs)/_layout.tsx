import { BlurView } from 'expo-blur';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function TabsLayout() {
  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={
          Platform.OS === 'ios'
            ? {
                tabBarStyle: { position: 'absolute', elevation: 0 },
                tabBarBackground: () => <BlurView tint="prominent" intensity={100} style={StyleSheet.absoluteFill} />
              }
            : undefined
        }
      >
        <Tabs.Screen name="index" options={{ tabBarLabel: 'Tab 1' }} />
        <Tabs.Screen name="tab2" options={{ tabBarLabel: 'Tab 2' }} />
        <Tabs.Screen name="tab3" options={{ tabBarLabel: 'Tab 3' }} />
      </Tabs>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
