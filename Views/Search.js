import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, setState} from 'react';
import { StyleSheet, Text, TextInput, FlatList, View, Picker} from 'react-native';
import {Searchbar} from 'react-native-paper';
//import DropDownPicker from 'react-native-dropdown-picker';
//import { List } from 'react-native-paper';

const Search = ({navigation})=> {  
  const [selectedValue, setSelectedValue] = useState("any");

  //https://jsonplaceholder.typicode.com/posts

  useEffect(() => {
    //fetch('https://localhost:3000/recipes')//json
    /*
    fetch("https://jsonplaceholder.typicode.com/posts") //static json for testing
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
      */
     setFilteredDataSource(json);
     setMasterDataSource(json);
  }, []);

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource            
      
      const newData = masterDataSource.filter(function (item) {
        if (selectedValue == "any"){
          const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        }
        else if (selectedValue == "ingredients"){
          const itemData = item.ingredients;
          const textData = text.toUpperCase();
          return itemData.find(key => key.toUpperCase() === textData) != undefined;
        }        
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };


  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>                
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <View style={styles.container}>          
      <View style = {styles.inputView}>
      <Picker
        selectedValue={selectedValue}     
        onValueChange={itemValue => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Relevance" value="any" />
        <Picker.Item label="Ingredients" value="ingredients" />
      </Picker>
        <Searchbar 
          round
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Type Here..."
          value={search}
          placeholderTextColor = "#003F5c"
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />        
      </View>      
      <StatusBar style="auto" />      
    </View>
  );
}

//title, description, prepTime, cookTime, ingredients, instructions
const json = [
  {"title": "Recipe 1", "description":"learn to make a recipe 1", "prepTime": "20 mins", "cookTime":"50 mins", "ingredients":["Item","X","Y","Z","Test"],"instructions":["Step 1","Step 2","Step 3"]},
  {"title": "Recipe 2", "description":"learn to make a recipe 2", "prepTime": "28 mins", "cookTime":"50 mins", "ingredients":["A","B","C",],"instructions":["Step 1","Step 2","Step 3"]},
  {"title": "Recipe 3", "description":"learn to make a recipe 3", "prepTime": "15 mins", "cookTime":"30 mins", "ingredients":["D","E","F","Test"],"instructions":["Step 1","Step 2","Step 3"]},
  {"title": "Recipe 4", "description":"learn to make a recipe 4", "prepTime": "0 mins", "cookTime":"10 mins", "ingredients":["Test"],"instructions":["Step 1","Step 2","Step 3"]},
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',    
  },
  itemStyle: {
    padding: 10,
  },
});


export default Search;