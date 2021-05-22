import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, Title, Divider, Portal, Menu, TextInput } from 'react-native-paper';
import Ingredient from './Ingredient'

export default function IngredientList({ handleIngredients }) {

  const [ingredients, setIngredients] = React.useState([{}]);


  const addIngredient = () => {
    //Add a new Ingredient Element to DOM
    setIngredients([...ingredients, {}])
    console.log(ingredients)
  }

  const removeIngredient = () => {
    if (ingredients.length > 0) {
      ingredients.splice(-1, 1);
    }
  }

  return (
    <View>
      <Title>Ingredients</Title>

      {
        ingredients.map((ingredient, index) => {
          return (
            <View key={index}>
              <Ingredient handleIngredient={newIngredient => { ingredient = newIngredient; ingredients[index] = ingredient; handleIngredients(ingredients) }} />
            </View>
          )
        })
      }

      <View style={{ flexDirection: 'row' }}>
        <IconButton
          icon="plus-box-outline"
          color="#41DC99"
          onPress={() => addIngredient()}
        />
        <IconButton
          icon="minus-box-outline"
          color="#fc5353"
          onPress={() => removeIngredient()}
        />
      </View>
    </View>
  );
}