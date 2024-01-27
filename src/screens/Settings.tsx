import { withScrollStackView } from '@/components/ScrollStackView';
import Details from '@/screens/Details';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Button, Platform, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

export function Settings({ navigation }: NativeStackScreenProps<ParamListBase>) {
  return (
    <View style={{ flex: 1, backgroundColor: 'yellow' }}>
      <Text>Settings screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
    </View>
  );
}

export function SettingsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: Platform.OS === 'ios',
        headerBlurEffect: 'systemThickMaterial'
      }}
    >
      <Stack.Screen name="Settings" component={withScrollStackView(Settings)} />
      <Stack.Screen name="Details" component={withScrollStackView(Details)} />
    </Stack.Navigator>
  );
}
