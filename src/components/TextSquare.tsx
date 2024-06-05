import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

interface TextSquareProps {
  title: string;
  content: string;
}

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
