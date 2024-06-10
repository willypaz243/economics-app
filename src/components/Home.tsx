import React from 'react';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import globalStyles from '../globalStyles';
import {GradientButton} from './atoms';

type Props = {
  readonly navigation: NativeStackNavigationProp<any, any>;
};

export function Home({navigation}: Props): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a nuestra aplicación</Text>
      <Text style={styles.text}>Realiza cálculos de interéz compuesto</Text>
      <Text style={styles.text}>de manera fácil y rapida</Text>

      <GradientButton
        style={styles.button}
        title="Iniciar"
        onPress={() => {
          navigation.navigate('Interes Compuesto');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ...globalStyles,
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    ...globalStyles.button,
    width: 256,
  },
  buttonContainer: {
    flex: 0,
  },
});
