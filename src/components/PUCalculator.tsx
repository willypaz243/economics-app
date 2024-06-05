import React from 'react';
import { Button, StyleSheet, Text, View, processColor } from 'react-native';
import { BarChart } from 'react-native-charts-wrapper';
import DropDownPicker from 'react-native-dropdown-picker';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
  readonly navigation: NativeStackNavigationProp<any, any>;
};

export function PUCalculator({ navigation }: Props): React.JSX.Element {
  const [type, setType] = React.useState('');
  const [open, setOpen] = React.useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>ICalculatorPU</Text>
        <Text style={styles.text}>
          Calculadora de Interes Compuesto para el Pago Unico
        </Text>
        <DropDownPicker
          style={styles.input}
          placeholder="tamaño de los periodos"
          open={open}
          value={type}
          setOpen={setOpen}
          setValue={setType}
          items={[
            { label: 'Diario', value: 'day' },
            { label: 'Semanal', value: 'week' },
            { label: 'Quincenal', value: 'quin' },
            { label: 'Mensual', value: 'month' },
            { label: 'Bimestral', value: 'bim' },
            { label: 'Trimestral', value: 'trim' },
            { label: 'Semestral', value: 'sem' },
            { label: 'Anual', value: 'year' },
          ]}
        />
      </View>
      <View style={styles.chartContainer}>
        <BarChart
          style={styles.chart}
          xAxis={{
            position: 'TOP_INSIDE',
            drawLimitLinesBehindData: true,
            yOffset: 10,
            textSize: 14,
          }}
          yAxis={{
            left: {
              textSize: 14,
              zeroLine: {
                enabled: true,
                lineColor: processColor('black'),
                lineWidth: 1.5,
              },
            },
            right: {
              enabled: false,
            },
          }}
          marker={{ enabled: true }}
          data={{
            dataSets: [
              {
                values: [
                  { x: 1, y: -224, marker: '1' },
                  { x: 3, y: 238, marker: '3' },
                  { x: 9, y: 1280, marker: '9' },
                  { x: 10, y: -442, marker: '10' },
                  { x: 12, y: 2280, marker: '12' },
                  { x: 15, y: -1742, marker: '15' },
                ],
                label: 'Deudas y Pagos',
                config: {
                  colors: [processColor('red'), processColor('green')],
                  valueTextSize: 12,
                },
              },
            ],
            config: {
              barWidth: 0.5,
            },
          }}
          chartDescription={{ text: '' }}
          legend={{ textSize: 14, drawInside: true }}
          onSelect={event => {
            console.log(JSON.stringify(event.nativeEvent, null, 2));
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Agregar deuda" />
        </View>
        <View style={styles.button}>
          <Button title="Calcular" />
        </View>
      </View>
      <View style={styles.bottomButtons}>
        <View style={styles.button}>
          <Button
            title="Ver Ejemplos"
            onPress={() => navigation.navigate('Ejemplos')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Help"
            onPress={() => navigation.navigate('Help')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 30,
  },
  chartContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  chart: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  button: {
    padding: 4,
    margin: 8,
  },
  input: {
    marginVertical: 3,
    margin: 'auto',
    width: 300,
    height: 40,
    borderWidth: 1,
  },
});

export default PUCalculator;
