import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Platform } from 'react-native';

export const stackScreenDefaults = {
  headerBackTitleVisible: false,
  headerTransparent: Platform.OS === 'ios',
  headerBlurEffect: 'systemThickMaterial'
} satisfies NativeStackNavigationOptions;
