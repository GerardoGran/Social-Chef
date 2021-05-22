import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Menu, Button } from 'react-native-paper';

export default function UnitDropdown({ handleUnit }) {
  const [unit, setUnit] = React.useState('mg');
  const [mainVisible, setMainVisible] = React.useState(false);
  const [metricVisible, setMetricVisible] = React.useState(false);
  const [usVisible, setUsVisible] = React.useState(false);
  const showMain = () => setMainVisible(true);
  const showMetric = () => setMetricVisible(true);
  const showUS = () => setUsVisible(true);
  const hideAll = () => { setMainVisible(false); setMetricVisible(false); setUsVisible(false) };

  return (
    <View>
      <Menu
        style={styles.dropdown}
        visible={mainVisible}
        onDismiss={hideAll}
        anchor={<Button style={{ width: 85 }} labelStyle={{ width: 50 }} icon='menu-down' onPress={showMain} mode='outlined'>{unit}</Button>}>
        <Menu
          style={{ width: 150 }}
          visible={metricVisible}
          onDismiss={hideAll}
          anchor={<Menu.Item title='Metric' icon='menu-right' onPress={showMetric} />}
        >
          <Menu.Item onPress={() => { setUnit('mg'); hideAll(); handleUnit('mg'); }} title='mg' />
          <Menu.Item onPress={() => { setUnit('g'); hideAll(); handleUnit('g'); }} title='g' />
          <Menu.Item onPress={() => { setUnit('kg'); hideAll(); handleUnit('kg'); }} title='kg' />
          <Menu.Item onPress={() => { setUnit('ml'); hideAll(); handleUnit('ml'); }} title='ml' />
          <Menu.Item onPress={() => { setUnit('L'); hideAll(); handleUnit('L'); }} title='L' />
        </Menu>
        <Menu
          style={{ width: 150 }}
          visible={usVisible}
          onDismiss={hideAll}
          anchor={<Menu.Item title='US' icon='menu-right' onPress={showUS} />}
        >
          <Menu.Item onPress={() => { setUnit('tsp'); hideAll(); handleUnit('tsp'); }} title='tsp' />
          <Menu.Item onPress={() => { setUnit('tbsp'); hideAll(); handleUnit('tbsp'); }} title='tbsp' />
          <Menu.Item onPress={() => { setUnit('oz'); hideAll(); handleUnit('oz'); }} title='oz' />
          <Menu.Item onPress={() => { setUnit('cup'); hideAll(); handleUnit('cup'); }} title='cup' />
        </Menu>
        <Menu.Item onPress={() => { setUnit('pz'); hideAll(); handleUnit('pz'); }} title='pz' />
      </Menu >
    </View>
  )
}

const styles = StyleSheet.create({
  dropdown: {
    padding: 0,
    width: 'auto',
  },
  menuItem: {
    height: 50,
    display: 'flex',
    padding: 0.5,
  },
});