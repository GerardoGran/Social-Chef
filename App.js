import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { BottomNavigation } from 'react-native-paper';

import CreateAccount from './Views/CreateAccount';
import Home from "./Views/Home";
import Login from "./Views/LogIn";
import Search from "./Views/Search";
import Fridge from "./Views/Fridge";
import CreateRecipe from "./Views/CreateRecipe";


export default function App() {  
  const Stack = createStackNavigator();

  const SearchRoute = () => <Search/>
  const HomeRoute = () =>  <Home/>
  const CreateRecipeRoute = () =>  <CreateRecipe/>
  const LoginRoute = () =>  <Login/>
  const CreateAccountRoute = () =>  <CreateAccount/>
  const FridgeRoute = () =>  <Fridge/>
  
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key:'login'},    
    { key: 'home', title: 'Home', icon: 'home' },    
    { key: 'search', title: 'Search', icon: 'magnify' },
    { key: 'createRecipe', title: 'Create Recipe', icon: 'pencil-outline' },
    { key: 'fridge', title: 'Fridge', icon: 'fridge' },  
    {key:'createAccount'}  
  ]);

  const renderScene = BottomNavigation.SceneMap({
    login: LoginRoute,
    createAccount: CreateAccountRoute,
    createRecipe: CreateRecipeRoute,
    search: SearchRoute,
    home: HomeRoute,
    fridge:FridgeRoute
  });

  return (            
    <NavigationContainer>                                    
      <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />  
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