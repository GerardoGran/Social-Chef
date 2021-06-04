import * as React from 'react';
import { List, StyleSheet, View, ScrollView } from 'react-native';
import { Divider, Button, Menu, DefaultTheme, TextInput, Provider as PaperProvider, Title } from 'react-native-paper';
import axios from '../axios';
import TimeEstimate from '../Components/Editor/TimeEstimate'
import IngredientList from '../Components/Editor/IngredientList'
import InstructionList from '../Components/Editor/InstructionList'

export default function CreateRecipe() {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [prepTime, setPrepTime] = React.useState({ time: 0, unit: 'min' });
  const [cookTime, setCookTime] = React.useState({ time: 0, unit: 'min' });
  const [ingredients, setIngredients] = React.useState([{}]);
  const [instructions, setInstructions] = React.useState([{}]);

  function submitRecipe(event) {
    const recipe = {
      title: title,
      description: description,
      prepTime: prepTime,
      cookTime: cookTime,
      ingredients: ingredients,
      instructions: instructions
    }
    if (title != "" && description != "" && prepTime.time != 0 && cookTime.time != 0 && ingredients != [{}] && instructions != [{}]) {
      console.log("Posting recipe")
      // axios.get().then(req => console.log(req)).catch(err => console.log(err))
      axios.post("/recipes", recipe)
        .then(req => {
          console.log(req)
        })
        .catch(err => console.log(err))
    } else {
      console.log("Missing data!")
    }
  }



  return (
    <PaperProvider theme={theme}>
      <ScrollView style={styles.recipeEditor}>
        <TextInput
          style={styles.title}
          label="Recipe Title"
          onChangeText={newTitle => setTitle(newTitle)}
        />

        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <TimeEstimate type='Prep' handleTime={newPrepTime => { setPrepTime(newPrepTime) }} />
          <TimeEstimate type='Cook' handleTime={newCookTime => { setCookTime(newCookTime) }} />
        </View>

        <TextInput
          multiline
          label="Recipe Description"
          onChangeText={newDescription => setDescription(newDescription)}
        />

        <IngredientList handleIngredients={newIngredients => { setIngredients(newIngredients); }} />
        <InstructionList handleInstructions={newInstructions => { setInstructions(newInstructions); }} />

        <Button mode='contained' onPress={submitRecipe}>SUBMIT</Button>        
      </ScrollView>      
    </PaperProvider >
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