import Card from '@/components/Card';
import StackScrollView from '@/components/StackScrollView';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

export const Dashboard = ({ navigation }: NativeStackScreenProps<ParamListBase>) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Dashboard',
      headerSearchBarOptions: {
        onChangeText: (text) => console.log(text)
      }
    });
  }, [navigation]);

  return (
    <StackScrollView>
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Card
            label="Card 1"
            icon="battery-charging-sharp"
            badge="23"
            style={styles.card}
            onPress={() => navigation.navigate('order2')}
          />
          <Card
            label="Card 2"
            icon="airplane-outline"
            badge="64"
            style={styles.card}
            onPress={() => navigation.navigate('cart')}
          />
          <Card
            label="Card 3"
            icon="alarm-outline"
            badge="73"
            style={styles.card}
            onPress={() => navigation.navigate('settingsTab', { screen: 'order2' })}
          />
          <Card
            label="Card 4"
            icon="bar-chart-outline"
            badge="72"
            style={styles.card}
            onPress={() => navigation.navigate('order')}
          />
          <Card label="Card 5" icon="barcode-outline" badge="93" style={styles.card} />
          <Card label="Card 6" icon="bed-outline" badge="23" style={styles.card} />
          <Card label="Card 7" icon="briefcase-outline" badge="4" style={styles.card} />
          <Card label="Card 8" icon="bug-outline" badge="46" style={styles.card} />
          <Card label="Card 9" icon="bulb-outline" badge="82" style={styles.card} />
          <Card label="Card 10" icon="business-outline" badge="52" style={styles.card} />
          <Card label="Card 11" icon="cafe-outline" badge="25" style={styles.card} />
          <Card label="Card 12" icon="calculator-outline" badge="93" style={styles.card} />
          <Card label="Card 13" icon="card-outline" badge="25" style={styles.card} />
          <Card label="Card 14" icon="color-filter-outline" badge="85" style={styles.card} />
          <Card label="Card 15" icon="color-palette-outline" badge="13" style={styles.card} />
          <Card label="Card 16" icon="dice-outline" badge="7" style={styles.card} />
        </View>
      </View>
    </StackScrollView>
  );
};

const screenWidth = Dimensions.get('window').width;
const cardWidth = 150; // Width of each card
const numColumns = Math.floor(screenWidth / cardWidth);
const isLargeScreen = screenWidth >= 768;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    backgroundColor: 'green'
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingHorizontal: 16,
    gap: 16
  },
  card: {
    width: `45%`,
    minHeight: 100
  }
});
