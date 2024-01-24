import ScrollStackView from '@/components/ScrollStackView';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Home() {
  const items = Array.from({ length: 60 }, (_, index) => index);

  return (
    <ScrollStackView title="My Home">
      {items.map((item, index) => (
        <View
          key={`${index}v`}
          style={{ backgroundColor: 'purple', flexDirection: 'row', justifyContent: 'space-between' }}
        >
          <Text key={index} style={{ fontSize: 30, fontWeight: 'bold', color: 'red' }}>{`Item ${item}`}</Text>
          <Text key={`${index}t`}>Abc</Text>
        </View>
      ))}
      <Link href="/product/detail">Product 123</Link>
    </ScrollStackView>
  );
}
