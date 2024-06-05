import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// Definición de las props que recibe el componente TextSquare
interface TextSquareProps {
  title: string;    // Título del cuadrado de texto
  content: string;  // Contenido del cuadrado de texto
}

// Componente funcional TextSquare que muestra un cuadrado de texto con un título, contenido y un botón
export function TextSquare({ title, content }: TextSquareProps): React.JSX.Element {
  return (
    <View style={styles.square}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
      
      <View style={styles.buttonContainer}> 
    
        <Button title="Colocar" onPress={() => {}} />
      </View>
    </View>
  );
}


// Estilos para el componente TextSquare
const styles = StyleSheet.create({
  square: {
    borderWidth: 1,
    borderColor: '#333', // Negro
    borderRadius: 10,
    backgroundColor: '#fff', // Blanco
    marginVertical: 10,
    padding: 15,
    width: '90%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333', // Negro
  },
  content: {
    fontSize: 16,
    color: '#555', // Gris oscuro
    textAlign: 'justify',
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
});

export default TextSquare;
