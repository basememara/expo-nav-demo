import { useScrollToTop } from '@react-navigation/native';
import { ReactNode, useRef } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface StackScrollViewProps {
  children?: ReactNode;
}

export default function StackScrollView({ children }: StackScrollViewProps) {
  const ref = useRef(null);
  useScrollToTop(ref);

  return (
    <ScrollView ref={ref} style={[{ flex: 1, backgroundColor: 'red' }]} contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView edges={['left', 'right', 'bottom']} style={{ flex: 1 }}>
        {children}
      </SafeAreaView>
    </ScrollView>
  );
}
