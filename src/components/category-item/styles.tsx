import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {COLORS, TYPOGRAPHY} from 'utils';

const styles = StyleSheet.create({
  container: {},
  categoryContainer: {
    backgroundColor: COLORS.PRIMARY,
    marginRight: hp(3),
    marginVertical: hp(1),
    padding: hp(1.8),
    borderLeftWidth: 4,
    borderColor: COLORS.BORDER,
    borderTopRightRadius: hp(4),
    borderBottomRightRadius: hp(4),
  },
  categoryTitle: {
    ...TYPOGRAPHY.TITLE,
    color: COLORS.TEXT_PRIMARY,
  },
});

export default styles;
