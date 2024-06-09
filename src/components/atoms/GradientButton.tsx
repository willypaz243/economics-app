import React from 'react';
import {ButtonProps, Pressable, StyleProp, Text, ViewStyle} from 'react-native';
import globalStyles from '../../globalStyles';
import {GradientBG} from './GradientBG';

type Props = {
  style: StyleProp<ViewStyle> & {color?: string};
};

export const GradientButton: React.FC<ButtonProps & Props> = props => {
  const {title, style, ...rest} = props;
  const {
    padding,
    paddingVertical,
    paddingHorizontal,
    paddingBottom,
    paddingEnd,
    paddingLeft,
    paddingRight,
    paddingStart,
    paddingTop,
    ...restStyle
  } = style as ViewStyle;
  const pressableStyles: StyleProp<ViewStyle> = {
    padding,
    paddingVertical,
    paddingHorizontal,
    paddingBottom,
    paddingEnd,
    paddingLeft,
    paddingRight,
    paddingStart,
    paddingTop,
  };
  return (
    <GradientBG style={restStyle}>
      <Pressable {...rest} style={pressableStyles}>
        <Text
          style={{
            ...globalStyles.text,
            color: props.style?.color ?? 'black',
          }}>
          {title}
        </Text>
      </Pressable>
    </GradientBG>
  );
};
