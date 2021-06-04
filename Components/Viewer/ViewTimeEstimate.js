import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Divider, Portal, Menu, TextInput, List } from 'react-native-paper';

export default function ViewTimeEstimate({ type, qty, unit }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <List.Icon icon="clock-outline" />
      <Text style={{ width: '35%' }}>{type}: {qty} {unit}</Text>
    </View >
  );
}