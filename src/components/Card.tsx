import { Ionicons } from '@expo/vector-icons';
import { ReactNode } from 'react';
import { Platform, Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

interface CardProps {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  badge: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export default function Card({ label, icon, badge, style, onPress }: CardProps) {
  const ContainerView = ({ children }: { children: ReactNode }) =>
    onPress ? (
      <Pressable onPress={onPress} style={[styles.container, style]}>
        {children}
      </Pressable>
    ) : (
      <View style={[styles.container, style]}>{children}</View>
    );

  return (
    <ContainerView>
      <View style={styles.labelContainer}>
        <Ionicons name={icon} size={24} color="white" />
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.badgeContainer}>
        <Text style={styles.badge}>{badge}</Text>
      </View>
    </ContainerView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'blue',
    borderRadius: Platform.OS === 'ios' ? 8 : 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0.3,
    shadowRadius: Platform.OS === 'ios' ? 6 : 3,
    elevation: Platform.OS === 'android' ? 4 : 0
  },
  labelContainer: {
    justifyContent: 'center',
    gap: 8
  },
  label: {
    fontSize: 16,
    color: 'white'
  },
  badgeContainer: {
    justifyContent: 'flex-start'
  },
  badge: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'gray'
  }
});
