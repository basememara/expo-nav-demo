import ScrollStackView from '@/components/ScrollStackView';
import { Text } from 'react-native';

export default function Tab2() {
  return (
    <ScrollStackView title="Tab 2 Nav" headerShown={false}>
      <Text>Tab 2 blah blah...</Text>
    </ScrollStackView>
  );
}
