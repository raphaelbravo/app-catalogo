import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const TYPOGRAPHY = StyleSheet.create({
  TITLE: {
    fontSize: hp(2.3),
    fontWeight: '600',
    letterSpacing: 1.5,
  },
  BIGTITLE: {
    fontSize: hp(2.9),
    fontWeight: '600',
    letterSpacing: 1.5,
  },
  SUBTITLE: {
    fontSize: hp(2.1),
    fontWeight: '500',
  },
  LABEL: {
    fontSize: hp(1.9),
    fontWeight: '500',
  },
});
