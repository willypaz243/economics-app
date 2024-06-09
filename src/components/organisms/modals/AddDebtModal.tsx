import {Picker} from '@react-native-picker/picker';
import {Theme, useTheme} from '@react-navigation/native';
import React from 'react';
import {Modal, StyleSheet, Text, TextInput, View} from 'react-native';
import globalStyles from '../../../globalStyles';
import {GradientBG, GradientButton} from '../../atoms';

type Props = {
  visible: boolean;
  onSubmit: () => void;
  onClose: () => void;
};

export const AddDebtModal: React.FC<Props> = ({visible, onSubmit, onClose}) => {
  const theme = useTheme();
  const styles = getLocalStyle({theme});

  const [typeValue, setTypeValue] = React.useState(1);
  const [timeValue, setTimeValue] = React.useState(1);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Agregar Monto</Text>
          <View style={styles.formContainer}>
            <View style={styles.formGroup}>
              <GradientBG style={styles.input}>
                <TextInput
                  placeholderTextColor={'white'}
                  style={styles.textInput}
                  placeholder="Monto"
                  keyboardType="numeric"
                />
              </GradientBG>
              <GradientBG style={styles.input}>
                <Picker
                  selectedValue={typeValue}
                  onValueChange={setTypeValue}
                  mode="dropdown"
                  style={styles.textInput}>
                  <Picker.Item label="Deuda" value={-1} />
                  <Picker.Item label="Inversion" value={1} />
                </Picker>
              </GradientBG>
            </View>
            <View style={styles.formGroup}>
              <GradientBG style={styles.input}>
                <TextInput
                  placeholderTextColor={'white'}
                  style={styles.textInput}
                  placeholder="Periodo"
                  keyboardType="numeric"
                />
              </GradientBG>
              <GradientBG style={styles.input}>
                <Picker
                  selectedValue={timeValue}
                  onValueChange={setTimeValue}
                  mode="dropdown"
                  style={styles.textInput}>
                  <Picker.Item label="Antes" value={-1} />
                  <Picker.Item label="Despues" value={1} />
                </Picker>
              </GradientBG>
            </View>
          </View>

          <GradientButton
            style={styles.button}
            title="Agregar"
            onPress={onSubmit}
          />
        </View>
      </View>
    </Modal>
  );
};

const getLocalStyle = ({theme}: {theme: Theme}) =>
  StyleSheet.create({
    ...globalStyles,
    container: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      flex: 1,
      justifyContent: 'center',
    },
    modalContent: {
      backgroundColor: theme.colors.background,
      padding: 16,
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 3,
        height: 5,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    input: {
      ...globalStyles.input,
      width: 150,
    },
    textInput: {
      color: 'white',
    },
    formContainer: {
      flex: 0,
      width: '100%',
      paddingVertical: 8,
    },
    formGroup: {
      flex: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: '100%',
    },
  });
