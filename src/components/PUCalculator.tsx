import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View, processColor} from 'react-native';
import {BarChart} from 'react-native-charts-wrapper';
import {AddDebtModal} from './organisms';

import {Picker} from '@react-native-picker/picker';
import globalStyles from '../globalStyles';

import {GradientBG, GradientButton} from './atoms';
import GradientPickerItem from './atoms/GradientPickerItem';

type Props = {
  readonly navigation: NativeStackNavigationProp<any, any>;
};

export function PUCalculator({navigation}: Props): React.JSX.Element {
  const items = [
    {label: 'Diario', value: 'day'},
    {label: 'Semanal', value: 'week'},
    {label: 'Quincenal', value: 'quin'},
    {label: 'Mensual', value: 'month'},
    {label: 'Bimestral', value: 'bim'},
    {label: 'Trimestral', value: 'trim'},
    {label: 'Semestral', value: 'sem'},
    {label: 'Anual', value: 'year'},
  ];
  const [timeRateValue, setTimeRateValue] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  // const [values, setValues] = React.useState<BarValue[]>([]);
  // const [colors, setColors] = React.useState<ProcessedColorValue[]>([]);

  // const addAmount = (debt: {x: number; y: number}) => {
  //   setValues([...values, {x: debt.x, y: debt.y, marker: String(debt.x)}]);
  //   setColors([...colors, processColor('red') as ProcessedColorValue]);
  // };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>ICalculatorPU</Text>
        <Text style={styles.text}>
          Calculadora de Interes Compuesto para el Pago Unico
        </Text>
        <GradientBG style={styles.picker}>
          <Picker
            selectedValue={timeRateValue}
            onValueChange={setTimeRateValue}
            mode="dropdown"
            style={styles.pickerStyle}>
            {items.map(item => (
              <GradientPickerItem
                key={item.value}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
        </GradientBG>
      </View>
      <View style={styles.charts}>
        <BarChart
          style={styles.charts}
          xAxis={{
            position: 'TOP_INSIDE',
            drawLimitLinesBehindData: true,
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
          marker={{enabled: true}}
          data={{
            dataSets: [
              {
                values: [
                  {x: 1, y: -224, marker: '1'},
                  {x: 3, y: 238, marker: '3'},
                  {x: 9, y: 1280, marker: '9'},
                  {x: 10, y: -442, marker: '10'},
                  {x: 12, y: 2280, marker: '12'},
                  {x: 15, y: -1742, marker: '15'},
                ],
                label: 'Deudas y Pagos',
                config: {
                  colors: [
                    processColor('red'),
                    processColor('green'),
                    processColor('green'),
                    processColor('red'),
                    processColor('green'),
                    processColor('red'),
                  ],
                  valueTextSize: 12,
                },
              },
            ],
            config: {
              barWidth: 0.5,
            },
          }}
          chartDescription={{text: ''}}
          legend={{textSize: 14, drawInside: true}}
          onSelect={event => {
            console.log(JSON.stringify(event.nativeEvent, null, 2));
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <GradientButton
          style={styles.button}
          title="Agregar monto"
          onPress={() => setModalVisible(true)}
        />

        <GradientButton style={styles.button} title="Calcular" />
      </View>
      <View style={styles.buttonContainer}>
        <GradientButton
          style={styles.button}
          title="Ver Ejemplos"
          onPress={() => navigation.navigate('Ejemplos')}
        />

        <GradientButton
          style={styles.button}
          title="Help"
          onPress={() => navigation.navigate('Help')}
        />
      </View>
      <AddDebtModal
        visible={modalVisible}
        onSubmit={() => setModalVisible(false)}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ...globalStyles,
  charts: {
    flex: 1,
    marginVertical: 30,
  },
  chartContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  chart: {
    flex: 0,
  },
  titleContainer: {
    alignItems: 'center',
    padding: 0,
  },
  picker: {
    color: 'white',
    width: 300,
    marginTop: 8,
    borderRadius: 5,
  },
  pickerStyle: {
    color: 'white',
  },
  buttonContainer: {
    margin: 8,
  },
});

export default PUCalculator;
