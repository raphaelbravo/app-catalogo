import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {COLORS, TYPOGRAPHY} from 'utils';

const styles = StyleSheet.create({
  container: {
    padding: hp(1.2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    ...TYPOGRAPHY.LABEL,
    color: COLORS.TEXT_PRIMARY,
    paddingRight: hp(0.8),
    paddingLeft: hp(0.5),
    paddingVertical: hp(0.8),
    letterSpacing: 1.5,
    borderBottomWidth: 2,
    borderColor: 'white',
    flex: 1,
  },
  search: {
    width: hp(3),
    height: hp(3),
    marginRight: hp(1),
    tintColor: COLORS.TEXT_PRIMARY,
  },
});

export default styles;
