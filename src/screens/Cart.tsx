import StackScrollView from '@/components/StackScrollView';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

export const Cart = ({ navigation }: NativeStackScreenProps<ParamListBase>) => {
  return (
    <StackScrollView>
      <View style={styles.container}>
        <Text>Cart</Text>
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
