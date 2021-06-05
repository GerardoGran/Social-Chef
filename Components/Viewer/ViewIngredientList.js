import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { IconButton, Title, Divider, Portal, Menu, TextInput } from 'react-native-paper';

export default function ViewIngredientList({ ingredients }) {
  return (
    <View>
      <Title>Ingredients</Title>

      {
        ingredients.map((ingredient, index) => {
          return (
            <View key={index}>
              <Text>{ingredient.quantity} {ingredient.unit} {ingredient.name}</Text>
            </View>
          )
        })
      }
    </View>
  );
}