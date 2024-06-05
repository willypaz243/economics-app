import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, PUCalculator, Ejemplos,Help } from './src/components';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ExamplesScreen">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PUCalculator" component={PUCalculator} />
        <Stack.Screen name="Ejemplos" component={Ejemplos} />
        <Stack.Screen name="Help" component={Help} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
