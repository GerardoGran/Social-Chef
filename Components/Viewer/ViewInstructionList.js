import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { IconButton, Title, Divider, Portal, Menu, TextInput } from 'react-native-paper';

export default function ViewInstructionList({ instructions }) {
  return (
    <View>
      <Title>Instructions</Title>

      {
        instructions.map((instruction, index) => {
          return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }} key={index}>
              <Text style={{ fontWeight: 'bold', fontSize: 30 }}>{index + 1}</Text>
              <Text>{instruction}</Text>
            </View>
          )
        })
      }
    </View>
  );
}