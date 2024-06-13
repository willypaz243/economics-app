import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import TextSquare from './TextSquare'; // Importa el componente TextSquare

export type Example = {
  title: string;
  content: string;
  capital: string;
  future: string;
  rate: string;
  time: string;
  timeSize: string;
  calcType: 'P' | 'F' | 'n' | 'i';
};

type Props = {
  readonly navigation: NativeStackNavigationProp<any, any>;
};

// Componente funcional Ejemplos que muestra una lista de TextSquare con ejemplos
export function Ejemplos({navigation}: Props): React.JSX.Element {
  const examples: Example[] = [
    {
      title: 'Ejemplo 1',
      content:
        'Un inversionista deposita $10,000 en una cuenta de ahorros con una tasa de interés anual del 5%. ¿Cuánto tendrá en la cuenta después de 8 años?',
      capital: '10000',
      future: '',
      rate: '5',
      time: '8',
      timeSize: 'Anual',
      calcType: 'F',
    },
    {
      title: 'Ejemplo 2',
      content:
        'Una persona recibe una herencia de $20,000 y decide invertirla en una cuenta de ahorros con una tasa de interés anual del 7%. ¿Cuánto tendrá en la cuenta después de 15 años?',
      capital: '20000',
      future: '',
      rate: '7',
      time: '15',
      timeSize: 'Anual',
      calcType: 'F',
    },
    {
      title: 'Ejemplo 3',
      content:
        'Una empresa recibe un pago único de $50,000 por un trabajo especial. Decide invertirlo en una cuenta de ahorros con una tasa de interés anual del 6%. ¿Cuánto tendrá en la cuenta después de 10 años?',
      capital: '50000',
      future: '',
      rate: '6',
      time: '10',
      timeSize: 'Anual',
      calcType: 'F',
    },
    {
      title: 'Ejemplo 4',
      content:
        'Un inversionista gana un premio de lotería de $100,000 y decide invertirlo en una cuenta de ahorros con una tasa deinterés anual del 4%. ¿Cuánto tendrá en la cuenta después de 20 años?',
      capital: '100000',
      future: '',
      rate: '4',
      time: '20',
      timeSize: 'Anual',
      calcType: 'F',
    },
    {
      title: 'Ejemplo 5',
      content:
        'Una persona recibe una indemnización por despido de $30,000 y decide invertirla en una cuenta de ahorros con una tasa de interés anual del 8%. ¿Cuánto tendrá en la cuenta después de 12 años?',
      capital: '30000',
      future: '',
      rate: '8',
      time: '12',
      timeSize: 'Anual',
      calcType: 'F',
    },
    {
      title: 'Ejemplo 6',
      content:
        'Un negocio recibe un pago anticipado de $25,000 por un proyecto. Decide invertirlo en una cuenta de ahorros con una tasa deinterés anual del 3%. ¿Cuánto tendrá en la cuenta después de 6 años?',
      capital: '25000',
      future: '',
      rate: '3',
      time: '6',
      timeSize: 'Anual',
      calcType: 'F',
    },
    {
      title: 'Ejemplo 7',
      content:
        'Un ahorrador deposita $15,000 en una cuenta de ahorros con una tasa de interés anual del 4%. ¿Cuánto tendrá en la cuenta después de 18 años?',
      capital: '15000',
      future: '',
      rate: '4',
      time: '18',
      timeSize: 'Anual',
      calcType: 'F',
    },
    {
      title: 'Ejemplo 8',
      content:
        'Una empresa recibe una compensación por un litigio de $40,000. Decide invertirlo en una cuenta de ahorros con una tasa de interés anual del 5%. ¿Cuánto tendrá en la cuenta después de 14 años?',
      capital: '40000',
      future: '',
      rate: '5',
      time: '14',
      timeSize: 'Anual',
      calcType: 'F',
    },
    {
      title: 'Ejemplo 9',
      content:
        'Un inversionista recibe una donación de $50,000 de un familiar. Decide invertirlo en una cuenta de ahorros con una tasa de interés anual del 6%. ¿Cuánto tendrá en la cuenta después de 20 años?',
      capital: '50000',
      future: '',
      rate: '6',
      time: '20',
      timeSize: 'Anual',
      calcType: 'F',
    },
    {
      title: 'Ejemplo 10',
      content:
        'Una persona gana un concurso y recibe un premio de $35,000. Decide invertirlo en una cuenta de ahorros con una tasa de interés anual del 7%. ¿Cuánto tendrá en la cuenta después de 16 años?',
      capital: '35000',
      future: '',
      rate: '7',
      time: '16',
      timeSize: 'Anual',
      calcType: 'F',
    },
    {
      title: 'Ejemplo 11',
      content:
        'Un negocio recibe un pago único por la venta de un activo de $75,000. Decide invertirlo en una cuenta de ahorros con una tasa de interés anual del 8%. ¿Cuánto tendrá en la cuenta después de 12 años?',
      capital: '75000',
      future: '',
      rate: '8',
      time: '12',
      timeSize: 'Anual',
      calcType: 'F',
    },
    {
      title: 'Ejemplo 12',
      content:
        'Un ahorrador recibe una bonificación de $20,000 en su trabajo. Decide invertirlo en una cuenta de ahorros con una tasa de interés anual del 4%. ¿Cuánto tendrá en la cuenta después de 25 años?',
      capital: '20000',
      future: '',
      rate: '4',
      time: '25',
      timeSize: 'Anual',
      calcType: 'F',
    },
    {
      title: 'Ejemplo 13',
      content:
        'Una empresa recibe un pago por la cancelación de un contrato de $60,000. Decide invertirlo en una cuenta de ahorros con una tasa de interés anual del 5%. ¿Cuánto tendrá en la cuenta después de 15 años?',
      capital: '60000',
      future: '',
      rate: '5',
      time: '15',
      timeSize: 'Anual',
      calcType: 'F',
    },
    {
      title: 'Ejemplo 14',
      content:
        'Un inversionista recibe una herencia de $100,000 y decide invertirla en una cuenta de ahorros con una tasa de interés anual del 6%. ¿Cuánto tendrá en la cuenta después de 30 años?',
      capital: '100000',
      future: '',
      rate: '6',
      time: '30',
      timeSize: 'Anual',
      calcType: 'F',
    },
    {
      title: 'Ejemplo 15',
      content:
        'Una persona recibe una indemnización por jubilación anticipada de $80,000. Decide invertirlo en una cuenta de ahorros con una tasa de interés anual del 7%. ¿Cuánto tendrá en la cuenta después de 22 años?',
      capital: '80000',
      future: '',
      rate: '7',
      time: '22',
      timeSize: 'Anual',
      calcType: 'F',
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {examples.map(example => (
          <TextSquare
            key={example.title}
            title={example.title}
            content={example.content}
            onPress={() => {
              navigation.navigate('Interes Compuesto', example);
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
}

// Estilos para el componente Ejemplos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Gris claro
  },
  scrollContainer: {
    paddingVertical: 20,
  },
});

export default Ejemplos;
