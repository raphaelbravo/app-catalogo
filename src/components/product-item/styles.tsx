import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {COLORS, TYPOGRAPHY} from 'utils';

const styles = StyleSheet.create({
  container: {flexDirection: 'row', padding: hp(1.2), alignItems: 'center'},
  imageContainer: {
    width: hp(6.5),
    height: hp(6.5),
    borderRadius: hp(0.6),
    overflow: 'hidden',
  },
  image: {width: '100%', height: '100%'},
  name: {
    ...TYPOGRAPHY.LABEL,
    color: COLORS.TEXT_PRIMARY,
    marginLeft: hp(2),
    flex: 1,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: hp(1.2),
  },
  coins: {
    width: hp(3.2),
    height: hp(3.2),
  },
  price: {
    ...TYPOGRAPHY.LABEL,
    color: COLORS.TEXT_PRIMARY,
    marginLeft: hp(1.8),
  },
});

export default styles;
