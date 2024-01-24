import { BottomTabBarHeightContext, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useHeaderHeight } from '@react-navigation/elements';
import { BlurView } from 'expo-blur';
import { Stack } from 'expo-router';
import React, { ReactNode, useContext } from 'react';
import { Platform, ScrollView, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';

interface ScrollStackViewProps {
  title?: string;
  headerShown?: boolean;
  headerBackgroundBlur?: boolean;
  scrollViewStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  children: ReactNode;
}

export default function ScrollStackView({
  title,
  headerShown = true,
  headerBackgroundBlur = true,
  scrollViewStyle,
  contentContainerStyle,
  children
}: ScrollStackViewProps) {
  const headerHeight = useHeaderHeight();
  const bottomTabBarHeight = useSafeBottomTabBarHeight();

  return (
    <ScrollView style={[{ flex: 1, backgroundColor: 'blue' }, scrollViewStyle]}>
      <Stack.Screen
        options={{
          title,
          headerTitle: title,
          headerShown,
          headerBackTitleVisible: false,
          ...(Platform.OS === 'ios' &&
            headerBackgroundBlur && {
              headerTransparent: true,
              headerBackground: () => <BlurView tint="prominent" intensity={100} style={StyleSheet.absoluteFill} />
            })
        }}
      />
      <SafeAreaView
        edges={['left', 'right', ...(!headerShown ? ['top' as Edge] : [])]}
        style={[
          {
            backgroundColor: 'green',
            flex: 1,
            ...(Platform.OS === 'ios' && {
              paddingTop: headerHeight,
              paddingBottom: bottomTabBarHeight
            })
          },
          contentContainerStyle
        ]}
      >
        {children}
      </SafeAreaView>
    </ScrollView>
  );
}

// Safely ignore bottom bar height if not available; default to 0
const useSafeBottomTabBarHeight = () => (useContext(BottomTabBarHeightContext) && useBottomTabBarHeight()) || 0;
