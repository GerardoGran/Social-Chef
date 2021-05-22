import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { IconButton, Title, Divider, Portal, Menu, TextInput } from 'react-native-paper';

export default function InstructionList({ handleInstructions }) {

  const [instructions, setInstructions] = React.useState([{}]);


  const addInstruction = () => {
    setInstructions([...instructions, {}])
  }

  const removeInstruction = () => {
    if (instructions.length > 0) {
      instructions.splice(-1, 1);
    }
  }

  return (
    <View>
      <Title>Instructions</Title>

      {
        instructions.map((instruction, index) => {
          return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }} key={index}>
              <Text style={{ fontWeight: 'bold', fontSize: 30 }}>{index + 1}</Text>
              <TextInput
                mode='outlined'
                style={{ width: '85%' }}
                onChangeText={newInstruction => { instructions[index] = newInstruction; handleInstructions(instructions) }}
              />
            </View>
          )
        })
      }

      <View style={{ flexDirection: 'row' }}>
        <IconButton
          icon="plus-box-outline"
          color="#41DC99"
          onPress={() => addInstruction()}
        />
        <IconButton
          icon="minus-box-outline"
          color="#fc5353"
          onPress={() => removeInstruction()}
        />
      </View>
    </View>
  );
}