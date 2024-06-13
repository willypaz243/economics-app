import {Picker} from '@react-native-picker/picker';
import {Theme, useTheme} from '@react-navigation/native';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  Alert,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
  processColor,
} from 'react-native';
import {BarChart} from 'react-native-charts-wrapper';
import {ICService} from '../../ICService';
import globalStyles from '../../globalStyles';
import {GradientBG, GradientButton} from '../atoms';
import {Example} from '../Ejemplos';
import TextSquare from '../TextSquare';

type FieldProps = {
  value: string;
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  label: string;
};

const Field: React.FC<FieldProps> = ({value, onChange, label}) => {
  const theme = useTheme();
  const styles = getLocalStyle({theme});
  return (
    <View style={{alignContent: 'flex-start'}}>
      <Text style={styles.text}>{label}</Text>
      <GradientBG style={styles.input}>
        <TextInput
          style={{fontSize: 16, textDecorationColor: 'white'}}
          cursorColor={'white'}
          value={value}
          onChange={onChange}
          placeholderTextColor={'white'}
          placeholder={label}
          keyboardType="numeric"
        />
      </GradientBG>
    </View>
  );
};

export const CalculatorIC: React.FC<NativeStackHeaderProps> = ({
  navigation,
  route,
}) => {
  const example = route.params ? (route.params as Example) : undefined;

  const service = new ICService();
  const theme = useTheme();
  const styles = getLocalStyle({theme});
  const items = [
    {label: 'Diario', value: 'Diario'},
    {label: 'Semanal', value: 'Semanal'},
    {label: 'Quincenal', value: 'Quincenal'},
    {label: 'Mensual', value: 'Mensual'},
    {label: 'Bimestral', value: 'Bimestral'},
    {label: 'Trimestral', value: 'Trimestral'},
    {label: 'Semestral', value: 'Semestral'},
    {label: 'Anual', value: 'Anual'},
  ];
  const timeSizeDict: {[key: string]: string} = {
    Diario: 'Dia(s)',
    Semanal: 'Semana(s)',
    Quincenal: 'Quincena(s)',
    Mensual: 'Mes(es)',
    Bimestral: 'Bimestre(s)',
    Trimestral: 'Trimestre(s)',
    Semestral: 'Semestre(s)',
    Anual: 'Año(s)',
  };

  const [caltype, setCaltype] = React.useState('F');

  const caltypes = [
    {label: 'Calcular Capital Futuro', value: 'F'},
    {label: 'Calcular Capital Precente', value: 'P'},
    {label: 'Calcular tasa de interes utilizado', value: 'i'},
    {label: 'Calcular Tiempo de Capitalización', value: 'n'},
  ];

  const [capital, setCapital] = React.useState('');
  const [rate, setRate] = React.useState('');
  const [time, setTime] = React.useState('');
  const [future, setFuture] = React.useState('');
  const [timeSize, setTimeSize] = React.useState('Mensual');

  const [result, setResult] = React.useState('');

  React.useEffect(() => {
    if (!example) {
      return;
    }
    setCaltype(example.calcType);
    setCapital(example.capital);
    setRate(example.rate);
    setTime(example.time);
    setFuture(example.future);
    setTimeSize(example.timeSize);
  }, [example]);

  const toNumber = (number: string) =>
    number.replace(/[^0-9.]/g, '').slice(0, 16);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Interes Compuesto</Text>
      {!!example && (
        <TextSquare title={example.title} content={example.content} />
      )}
      <View style={{paddingBottom: 16, paddingHorizontal: 16}}>
        <GradientBG style={styles.input}>
          <Picker
            selectedValue={caltype}
            onValueChange={setCaltype}
            mode="dropdown"
            style={styles.pickerStyle}>
            {caltypes.map(item => (
              <Picker.Item
                label={item.label}
                value={item.value}
                key={item.value}
              />
            ))}
          </Picker>
        </GradientBG>

        <GradientBG style={styles.input}>
          <Picker
            selectedValue={timeSize}
            onValueChange={setTimeSize}
            mode="dropdown"
            style={styles.pickerStyle}>
            {items.map(item => (
              <Picker.Item
                label={item.label}
                value={item.value}
                key={item.value}
              />
            ))}
          </Picker>
        </GradientBG>
      </View>
      <View style={{paddingHorizontal: 16}}>
        {caltype !== 'P' && (
          <Field
            label="Capital Inicial (P)"
            value={capital}
            onChange={event => {
              setCapital(toNumber(event.nativeEvent.text));
            }}
          />
        )}
        {caltype !== 'F' && (
          <Field
            label="Capital Futuro (F)"
            value={future}
            onChange={event => {
              setFuture(toNumber(event.nativeEvent.text));
            }}
          />
        )}
        {caltype !== 'i' && (
          <Field
            label={`Tasa de Interes (i) % ${timeSize}`}
            value={rate}
            onChange={event => {
              setRate(toNumber(event.nativeEvent.text));
            }}
          />
        )}
        {caltype !== 'n' && (
          <Field
            label={`tiempo (n) en ${timeSizeDict[timeSize]}`}
            value={time}
            onChange={event => {
              setTime(toNumber(event.nativeEvent.text));
            }}
          />
        )}

        <GradientButton
          style={styles.button}
          title="Calcular"
          onPress={() => {
            const values = {
              capital: Number(capital),
              future: Number(future),
              time: Number(time),
              rate: Number(rate),
            };
            if (values.rate && Number(values.rate) > 100) {
              Alert.alert('Error', 'Tasa de interés debe ser menor a 100%');
              return;
            }
            if (
              !(
                (values.capital || caltype === 'P') &&
                (values.future || caltype === 'F') &&
                (values.time || caltype === 'n') &&
                (values.rate || caltype === 'i')
              )
            ) {
              Alert.alert('Error', 'Por favor llene todos los campos.');
              return;
            }
            let res = 0;
            switch (caltype) {
              case 'P':
                res = service.calculateICFuture(
                  values.future,
                  values.time,
                  values.rate,
                );
                setCapital(String(res));
                setResult(String(res.toFixed(4)) + ' $');
                break;
              case 'F':
                res = service.calculateIC(
                  values.capital,
                  values.time,
                  values.rate,
                );
                setFuture(String(res));
                setResult(String(res.toFixed(4)) + ' $');
                break;
              case 'i':
                res = service.calculateICRate(
                  values.capital,
                  values.time,
                  values.future,
                );
                setRate(String(res));
                setResult(String(res.toFixed(4)) + ' %');
                break;
              case 'n':
                res = service.calculateICtime(
                  values.capital,
                  values.future,
                  values.rate,
                );
                setTime(String(res));
                setResult(
                  String(res.toFixed(4)) + ' ' + timeSizeDict[timeSize],
                );
                break;
              default:
                break;
            }
          }}
        />
      </View>

      <Text style={styles.title}>
        Resultado:
        <Text style={[styles.title, {color: 'blue'}]}> {result}</Text>
      </Text>
      {!!capital && !!future && !!time && (
        <View style={styles.charts}>
          <BarChart
            style={styles.charts}
            xAxis={{
              position: 'TOP',
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
                drawAxisLine: true,
                spaceBottom: 350,
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
                    {x: 0, y: Number(capital), marker: 'Capital Presente'},
                    {
                      x: Math.round(Number(time)),
                      y: Number(future),
                      marker: 'Capital Futuro',
                    },
                  ],
                  label: 'Precente / Futuro',
                  config: {
                    colors: [processColor('green'), processColor('blue')],
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
      )}
      <View
        style={{
          borderTopWidth: 2,
          borderTopColor: 'black',
          marginTop: 8,
          marginHorizontal: 16,
          padding: 8,
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'space-around',
          alignItems: 'baseline',
          justifyContent: 'space-around',
        }}>
        <GradientButton
          style={{...styles.button, padding: 0, width: 128}}
          title="Ejemplos"
          onPress={() => navigation.navigate('Ejemplos')}
        />
        <GradientButton
          style={{...styles.button, padding: 0, width: 128}}
          title="Help"
          onPress={() => navigation.navigate('Help')}
        />
      </View>
    </ScrollView>
  );
};

const getLocalStyle = ({}: {theme: Theme}) => ({
  ...globalStyles,
  pickerStyle: {
    color: 'white',
  },
  charts: {
    flex: 1,
    marginVertical: 8,
    minHeight: 384,
  },
});
