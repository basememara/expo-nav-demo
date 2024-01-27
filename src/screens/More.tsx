import { withScrollStackView } from '@/components/ScrollStackView';
import Details from '@/screens/Details';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Button, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

export function More({ navigation }: NativeStackScreenProps<ParamListBase>) {
  return (
    <View style={{ flex: 1, backgroundColor: 'yellow' }}>
      <Text>More screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
    </View>
  );
}

export function MoreStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="More" component={withScrollStackView(More)} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={withScrollStackView(Details)} />
    </Stack.Navigator>
  );
}
