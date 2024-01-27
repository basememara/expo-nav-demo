import { ParamListBase, Stack } from '@react-navigation/native';
import React, { ReactNode } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ScrollStackViewProps {
  children?: ReactNode;
}

export default function ScrollStackView({ children }: ScrollStackViewProps) {
  return (
    <ScrollView style={[{ flex: 1, backgroundColor: 'red' }]} contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView edges={['left', 'right', 'bottom']} style={{ flex: 1 }}>
        {children}
      </SafeAreaView>
    </ScrollView>
  );
}

export function withScrollStackView<P>(
  ScreenComponent: Stack.ScreenComponentType<ParamListBase, string>,
  scrollStackViewProps?: ScrollStackViewProps
) {
  const WrappedComponent = (props: P) => (
    <ScrollStackView {...scrollStackViewProps}>
      <ScreenComponent {...props} />
    </ScrollStackView>
  );

  // For debugging purposes
  WrappedComponent.displayName = `withScrollStackView(${ScreenComponent.displayName || 'Component'})`;

  return WrappedComponent;
}
