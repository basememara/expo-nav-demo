import StackScrollView from '@/components/StackScrollView';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';
import { StyleSheet, Text } from 'react-native';

export const Order = ({ navigation }: NativeStackScreenProps<ParamListBase>) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Order 123'
    });
  }, [navigation]);

  return (
    <StackScrollView>
      <Text>Order 1</Text>
    </StackScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
