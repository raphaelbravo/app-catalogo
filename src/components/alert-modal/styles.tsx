import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {COLORS, TYPOGRAPHY} from 'utils';

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: COLORS.BACKDROP,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },
  container: {
    backgroundColor: COLORS.BACKGROUND,
    width: '70%',
    borderRadius: hp(2),
    paddingVertical: hp(3),
    borderColor: COLORS.BORDER,
    borderWidth: 1,
    paddingHorizontal: hp(2),
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  message: {
    ...TYPOGRAPHY.SUBTITLE,
    textAlign: 'center',
    color: COLORS.TEXT_PRIMARY,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: hp(2),
    marginTop: hp(2.5),
  },
  spacer: {
    width: hp(3),
  },
});

export default styles;
