// lista.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { coffeList } from '../lista/lista';

const CoffeeItem = ({ route }) => {
  const { coffeList } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.coffeeListContainer}>
        {coffeeList.map((coffee, index) => (
          <CoffeeListItem key={index} coffee={coffee} />
        ))}
      </View>
    </View>
  );
};

const CoffeeListItem = ({ coffee }) => (
    <View style={styles.coffeeItemContainer}>
      <Text>{coffee.name}</Text>
      <Text>{coffee.description}</Text>
    </View>
  );

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
});

export default CoffeeItem;
