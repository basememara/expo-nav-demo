import { withScrollStackView } from '@/components/ScrollStackView';
import Details from '@/screens/Details';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { useLayoutEffect } from 'react';
import { Button, Platform, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

export function Home({ navigation }: NativeStackScreenProps<ParamListBase>) {
  const data = Array.from({ length: 50 });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        // hideNavigationBar: false,
        // hideWhenScrolling: false,
        onChangeText: (text) => console.log(text)
      }
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, backgroundColor: 'yellow' }}>
      <Text>Home screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
      {data.map((_, index) => (
        <Text key={index} style={{ padding: 10, fontSize: 18, fontWeight: 'bold', color: 'blue' }}>
          Item {index + 1}
        </Text>
      ))}
    </View>
  );
}

export function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: Platform.OS === 'ios',
        headerBlurEffect: 'systemThickMaterial'
      }}
    >
      <Stack.Screen name="Home" component={withScrollStackView(Home)} options={{ headerLargeTitle: true }} />
      <Stack.Screen name="Details" component={withScrollStackView(Details)} />
    </Stack.Navigator>
  );
}
