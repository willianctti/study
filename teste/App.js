// App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/galera/home';  // Use o nome correto
import CoffeeItem from './components/galera/lista';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="home" component={HomeScreen} /> */}
        <Stack.Screen name="coffees" component={CoffeeItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
