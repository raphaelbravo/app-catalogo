/**
 *
 * @format
 */
import {MText} from 'components';
import React, {ReactNode, useMemo} from 'react';
import {StyleProp, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import styles from './styles';
interface Props {
  children: ReactNode;
  style?: ViewStyle;
  textStyle?: StyleProp<TextStyle>;
  onPress: () => void;
}
const Button = ({children, style = {}, textStyle = {}, onPress}: Props) => {
  const customStyle = useMemo(
    () => ({...(style as ViewStyle), ...styles.container}),
    [style],
  );
  const customTextStyle = useMemo(
    () => ({...(textStyle as TextStyle), ...styles.label}),
    [textStyle],
  );
  return (
    <TouchableOpacity onPress={onPress} style={customStyle}>
      <MText style={customTextStyle}>{children}</MText>
    </TouchableOpacity>
  );
};

export {Button};
