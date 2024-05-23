/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

function App(): React.JSX.Element {
  const [value, setValue] = useState(0);
  const [time, setTime] = useState(0);
  const [type, setType] = useState('');
  const [open, setOpen] = useState(false);

  const isNumber = (number: number | string) => {
    if (typeof number === 'number') {
      return true;
    }
    if (typeof number === 'string') {
      const regex = /^\d+(\.\d{0,2})?$/;
      return regex.exec(number) !== null;
    }
  };
  const handleChange = (text: string) => {
    if (isNumber(text)) {
      setValue(Number(text));
    }
  };
  const handleTimeChange = (text: string) => {
    if (isNumber(text)) {
      setTime(Number(text));
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ICalculatorPU</Text>
      <Text style={styles.text}>
        Calculadora de Interes Compuesto para el Pago Unico
      </Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        placeholder="Ingrese el monto del prestamo"
        value={value > 0 ? value.toString() : ''}
        onChangeText={handleChange}
      />
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        placeholder="Ingrese el tiempo de expiracion"
        value={time > 0 ? time.toString() : ''}
        onChangeText={handleTimeChange}
      />
      <DropDownPicker
        style={styles.input}
        placeholder="tipo de capitalizacion"
        open={open}
        value={type}
        setOpen={setOpen}
        setValue={setType}
        items={[
          {label: 'Diario', value: 'day'},
          {label: 'Semanal', value: 'week'},
          {label: 'Quincenal', value: 'quin'},
          {label: 'Mensual', value: 'month'},
          {label: 'Bimestral', value: 'bim'},
          {label: 'Trimestral', value: 'trim'},
          {label: 'Semestral', value: 'sem'},
          {label: 'Anual', value: 'year'},
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
  input: {
    marginVertical: 3,
    margin: 'auto',
    width: 300,
    height: 40,
    borderWidth: 1,
  },
});

export default App;
