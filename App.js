import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from 'react-native-paper';

import CreateAccount from './Views/CreateAccount';
import CreateRecipe from './Views/CreateRecipe'
import Home from "./Views/Home";
import Login from "./Views/LogIn";
import Fridge from "./Views/Fridge";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LogIn" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Fridge" component={Fridge} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
          <Stack.Screen name="CreateRecipe" component={CreateRecipe} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});