import * as React from 'react';
import Constants from 'expo-constants';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function Fridge() {
const [itemList, setItemList] = React.useState([]);
const[newItem, setNewItem] = React.useState("");

React.useEffect(() => {
  getData();
}, []);

React.useEffect(() => {
  storeData();
}, [itemList])

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('FridgeList')
    if(value !== null) {
      setItemList(JSON.parse(value));
    } else {
      console.log("No data");
    }
  } catch(e) {
    // error reading value
  }
}

const storeData = async () => {
  const stringifiedList = JSON.stringify(itemList);
  await AsyncStorage.setItem('FridgeList', stringifiedList);
}

return (
    <View style={styles.container}>
    <Text style={styles.paragraph}>
      My Fridge List
    </Text>
    <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={text => setNewItem(text)}
          value={newItem}
          placeholder="New Item..."/>
        <TouchableOpacity 
          onPress={() => {
            setItemList([...itemList, newItem]);
            setNewItem("");}}
          style={styles.button}>
          <Text style={{color: '#FFF', textAlign: 'center'}}>Add</Text>
        </TouchableOpacity>
      </View>
        <View style = {styles.itemList}>
        {itemList.map((item, index) => (
           <TouchableOpacity
           onPress={() => {
              let listCopy = itemList.slice()
              listCopy.splice(index, 1);
              setItemList(listCopy);
            }}
            style={styles.listItem}>
            <Text style={{fontSize: 16}}>{item}</Text>
          </TouchableOpacity>
          ))}
    </View>
  </View>
);
}


const styles = StyleSheet.create({
inputContainer: {
    height: 40,
    width: '80%',
    flexDirection: 'row',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    width: '80%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#000',
    width: '20%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },
  itemList: {
    marginTop: 20,
    width: '80%'
  },
  listItem: {
    width: '100%',
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E5E5E5'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});