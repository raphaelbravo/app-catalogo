import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {COLORS, TYPOGRAPHY} from 'utils';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(2),
  },
  link: {
    ...TYPOGRAPHY.LABEL,
    color: COLORS.PRIMARY,
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
});

export default styles;
