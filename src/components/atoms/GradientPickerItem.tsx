import React from 'react';

import {Picker} from '@react-native-picker/picker';
import {StyleProp, ViewStyle} from 'react-native';
import {GradientBG} from './GradientBG';

type Props = {
  key: string;
  label: string;
  value: string;
  style?: StyleProp<ViewStyle> & {color?: string};
};

const GradientPickerItem: React.FC<Props> = ({key, label, value, style}) => {
  return (
    <GradientBG key={key} style={style}>
      <Picker.Item style={style} label={label} value={value} />
    </GradientBG>
  );
};

export default GradientPickerItem;
