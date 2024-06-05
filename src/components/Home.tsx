import React from 'react';

import {Button, StyleSheet, Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Props = {
  readonly navigation: NativeStackNavigationProp<any, any>;
};

export function Home({navigation}: Props): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a nuestra aplicación</Text>
      <Text style={styles.text}>Realiza cálculos de interéz compuesto</Text>
      <Text style={styles.text}>de manera fácil y rapida</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="interés compuesto"
            onPress={() => {
              navigation.navigate('PUCalculator');
            }}
          />
        </View>
        <View style={styles.button}>
          <Button title="Calcular PU" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    padding: 4,
    margin: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  text: {
    paddingHorizontal: 3,
    paddingVertical: 0,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});