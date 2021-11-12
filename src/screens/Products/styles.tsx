import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {flex: 1},
  contentList: {
    paddingBottom: hp(4),
  },
});

export default styles;
