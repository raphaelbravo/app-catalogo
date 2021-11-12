/**
 *
 * @format
 */
import React, {useMemo} from 'react';
import {Platform, StyleProp, Text, TextProps, TextStyle} from 'react-native';
const FONTS: {[key: string]: any} = {
  '200': 'Montserrat-Thin',
  '300': 'Montserrat-Light',
  '400': 'Montserrat-Regular',
  '500': 'Montserrat-Medium',
  '600': 'Montserrat-SemiBold',
  '700': 'Montserrat-Bold',
  '800': 'Montserrat-ExtraBold',
  '900': 'Montserrat-Black',
};
const MText = (props: TextProps) => {
  var {style = {}} = props;
  const {fontWeight = '400'} = style as TextStyle;
  const customStyle: StyleProp<TextStyle> = useMemo(
    () => ({
      ...(style as TextStyle),
      fontFamily: FONTS[fontWeight],
      fontWeight: Platform.OS === 'android' ? 'normal' : fontWeight,
    }),
    [style, fontWeight],
  );

  return <Text {...props} style={customStyle} />;
};

export {MText};
