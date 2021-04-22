import * as React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, CheckBox} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function Fridge() {
const [itemList, setItemList, isSelected] = React.useState([]);
const[newItem, setNewItem, setItemQuantity, setSelection] = React.useState("");

React.useEffect(() => {
  getData();
}, []);

React.useEffect(() => {
  storeData();
}, [itemList])

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('shoppingList')
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
  await AsyncStorage.setItem('shoppingList', stringifiedList);
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
          placeholder="New Item..."
        />
        <TouchableOpacity 
          onPress={() => setItemList([...itemList, newItem])}
          style={styles.button}
        >
          <Text style={{color: '#FFF', textAlign: 'center'}}>Add</Text>
        </TouchableOpacity>
        <View style={styles.itemList}>
          {itemList.map((item) => (
          <View style={styles.listItem}>
          <Text style={{fontSize: 16}}>{item}</Text>
    </View>
  ))}
</View>
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
    width: '50%'
  },
  listItem: {
    width: '100%',
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E5E5E5'
  }

});