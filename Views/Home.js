import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>You are at the home screen</Text>
      <TouchableOpacity
        onPress={() => navigation.push("Fridge")}>
        <Text>Fridge</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.push("CreateRecipe")}>
        <Text>Create Recipe</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
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
