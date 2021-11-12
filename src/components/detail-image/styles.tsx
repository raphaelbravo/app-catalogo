import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS, TYPOGRAPHY} from 'utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageWrapper: {
    backgroundColor: COLORS.SECONDARY,
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageTouchable: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: wp(100),
    height: wp(100),
  },
  detailContainer: {
    backgroundColor: COLORS.BACKGROUND,
    width: '100%',
    borderRadius: hp(1.8),
    overflow: 'hidden',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    overflow: 'hidden',
    flex: 1,
    paddingHorizontal: hp(3),
    paddingTop: hp(4),
  },
  title: {
    ...TYPOGRAPHY.BIGTITLE,
    color: COLORS.TEXT_PRIMARY,
  },

  category: {
    ...TYPOGRAPHY.LABEL,
    color: COLORS.TEXT_PRIMARY,
    marginTop: hp(0.8),
    letterSpacing: 5,
  },
  label: {
    ...TYPOGRAPHY.LABEL,
    color: COLORS.TEXT_PRIMARY,
    marginVertical: hp(2.5),
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(2.4),
  },
  icon: {
    width: hp(3),
    height: hp(3),
  },
  value: {
    ...TYPOGRAPHY.LABEL,
    color: COLORS.TEXT_PRIMARY,
    marginLeft: hp(1.8),
  },
});

export default styles;
