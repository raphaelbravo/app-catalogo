import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {COLORS} from 'utils';

const styles = StyleSheet.create({
  favorite: {width: hp(2.5), height: hp(2.5), tintColor: COLORS.TEXT_PRIMARY},
});

export default styles;
