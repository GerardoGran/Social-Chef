import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

import CreateAccount from './Views/CreateAccount';
import Home from "./Views/Home";
import Login from "./Views/LogIn";
import Search from  "./Views/Search";

export default function App() {
  const Stack = createStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "LogIn" component = {Login} />
          <Stack.Screen name = "Home" component = {Home} />
          <Stack.Screen name = "CreateAccount" component = {CreateAccount} />
          <Stack.Screen name = "Search" component = {Search} />
        </Stack.Navigator>
      </NavigationContainer>
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