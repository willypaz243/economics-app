import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export function Help(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ayuda</Text>
      <Text style={styles.text}>
        Aquí puedes agregar información para ayudar al usuario a entender cómo usar la calculadora.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
  },
});
