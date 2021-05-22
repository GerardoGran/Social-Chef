import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider, Portal, Menu, TextInput } from 'react-native-paper';
import UnitDropdown from './UnitDropdown'

export default function Ingredient({ handleIngredient }) {
  const [quantity, setQuantity] = React.useState();
  const [unit, setUnit] = React.useState('mg');
  const [name, setName] = React.useState('');
  const [ingredient, setIngredient] = React.useState({ quantity: quantity, unit: unit, name: name })

  return (
    <View style={{ flexDirection: 'row' }}>
      <TextInput
        style={{ width: '17%' }}
        label='Qty.'
        value={quantity}
        keyboardType='numeric'
        onChangeText={newQty => { setQuantity(newQty); setIngredient({ quantity: newQty, unit: unit, name: name }); handleIngredient({ quantity: newQty, unit: unit, name: name }); }}
      />

      <UnitDropdown handleUnit={newUnit => { setUnit(newUnit); setIngredient({ quantity: quantity, unit: newUnit, name: name }); handleIngredient({ quantity: quantity, unit: newUnit, name: name }); }}></UnitDropdown>

      <TextInput
        mode='outlined'
        style={{ width: '58%' }}
        label='Name'
        value={name}
        onChangeText={newName => { setName(newName); setIngredient({ quantity: quantity, unit: unit, name: newName }); handleIngredient({ quantity: quantity, unit: unit, name: newName }); }}
      />
    </View>
  );
}