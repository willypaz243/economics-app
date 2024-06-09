import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const GradientBG: React.FC<Props> = ({children, style}) => {
  return (
    <LinearGradient
      colors={['#0399b0', '#7ad75a']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={style}>
      {children}
    </LinearGradient>
  );
};
