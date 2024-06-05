import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

export function Help(): React.JSX.Element {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ayuda</Text>
      <Text style={styles.sectionTitle}>¿Cómo usar la aplicación?</Text>
      <Text style={styles.text}>
        Bienvenido a la aplicación de cálculo de interés compuesto para pago
        único. Aquí encontrarás instrucciones sobre cómo utilizarla.
      </Text>
      <Text style={styles.subTitle}>1. Inicio</Text>
      <Text style={styles.text}>
        Al abrir la aplicación, verás una pantalla de inicio con una breve
        descripción y un botón para acceder a la calculadora.
      </Text>
      <Text style={styles.subTitle}>2. Calculadora</Text>
      <Text style={styles.text}>
        En la calculadora, ingresa la cantidad inicial de la inversión, la tasa
        de interés anual y el período en años. Luego, presiona "Calcular" para
        obtener el valor futuro de la inversión.
      </Text>
      <Text style={styles.subTitle}>3. Resultados</Text>
      <Text style={styles.text}>
        Una vez calculado, se mostrará en pantalla el valor futuro de la
        inversión, basado en la información ingresada.
      </Text>
      <Text style={styles.subTitle}>4. Ejemplos</Text>
      <Text style={styles.text}>
        Para comprender mejor el concepto, la aplicación incluye ejemplos de
        situaciones financieras comunes. Puedes acceder a ellos en la sección de
        ejemplos.
      </Text>
      <Text style={styles.subTitle}>5. Ayuda</Text>
      <Text style={styles.text}>
        Si necesitas más información sobre cómo utilizar la aplicación o sobre
        el concepto de interés compuesto, puedes consultar la sección de ayuda.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#333',
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
});

export default Help;
