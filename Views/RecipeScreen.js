import * as React from 'react';
import { useEffect } from 'react';
import { List, StyleSheet, View, ScrollView, Text } from 'react-native';
import { Divider, Button, Menu, DefaultTheme, TextInput, Provider as PaperProvider, Title } from 'react-native-paper';
import ViewTimeEstimate from "../Components/Viewer/ViewTimeEstimate"
import ViewIngredientList from "../Components/Viewer/ViewIngredientList"
import ViewInstructionList from "../Components/Viewer/ViewInstructionList"


export default function RecipeScreen({ route }) {
  const [recipe, setRecipe] = React.useState(route.params)

  console.log(recipe);
  return (
    <PaperProvider theme={theme}>
      <ScrollView style={styles.recipeEditor}>
        <Title>{recipe.title}</Title>

        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <ViewTimeEstimate type="Prep" qty={recipe.prepTime.time} unit={recipe.prepTime.unit} />
          <ViewTimeEstimate type="Cook" qty={recipe.cookTime.time} unit={recipe.cookTime.unit} />
        </View>

        <Text>{recipe.description}</Text>

        <ViewIngredientList ingredients={recipe.ingredients} />
        <ViewInstructionList instructions={recipe.instructions} />
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  recipeEditor: {
    ...StyleSheet.absoluteFill,
  },
  title: {
    width: "70%",
    fontSize: 24
  },
  numberInput: {
    width: "30%"
  },
  iconStyle: {
    width: 20,
    height: 20
  }
});

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#41DC99',
    accent: '#A7C4A0',
    background: '#FFFFFF',
    text: '#4D2424'
  },
};