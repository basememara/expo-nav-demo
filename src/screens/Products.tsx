import StackScrollView from '@/components/StackScrollView';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Products = ({ navigation }: NativeStackScreenProps<ParamListBase>) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Products'
    });
  }, [navigation]);

  return (
    <StackScrollView>
      <View style={styles.container}>
        <Text>Products</Text>
      </View>
    </StackScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green'
  }
});
