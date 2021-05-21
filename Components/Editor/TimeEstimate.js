import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider, Portal, Menu, TextInput } from 'react-native-paper';

export default function TimeEstimate({ type, handleTime }) {
  const [qty, setQty] = React.useState();
  const [unit, setUnit] = React.useState('min');

  const [visible, setVisible] = React.useState(false);
  const showElement = () => setVisible(true);
  const hideElement = () => setVisible(false);
  return (
    <View style={{ flexDirection: 'row' }}>
      <TextInput
        style={{ width: '35%' }}
        label={type}
        value={qty}
        keyboardType='numeric'
        onChangeText={newQty => { setQty(newQty); handleTime({ time: newQty, unit: unit }) }}
      />

      <Menu
        style={{ width: '45%' }}
        visible={visible}
        onDismiss={hideElement}
        anchor={<TextInput style={{ width: 90 }} editable={false} value={unit} name='menu-down' right={
          <TextInput.Icon
            name='menu-down'
            onPress={showElement}
            size={20}
          />} />}>
        <Menu.Item onPress={() => { setUnit('min'); hideElement(); handleTime({ time: qty, unit: 'min' }) }} title='min' />
        <Divider />
        <Menu.Item onPress={() => { setUnit('hr'); hideElement(); handleTime({ time: qty, unit: 'hr' }) }} title='hr' />
      </Menu>
    </View>
  );
}