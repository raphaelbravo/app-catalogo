/**
 *
 * @format
 */
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {ICONS} from 'images';
import {Product} from 'models';
import {RootStackParamList} from 'navigation';
import React, {useMemo} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './styles';

type FavoritesProps = NavigationProp<RootStackParamList, 'Products'>;

interface Props {
  handleAction?: () => void;
  active?: boolean | Product;
}
const FavoritesIcon = ({handleAction, active = true}: Props) => {
  const navigation = useNavigation<FavoritesProps>();
  const icon = useMemo(
    () => (active ? ICONS.FAVORITE : ICONS.NO_FAVORITE),
    [active],
  );
  const action = () => {
    if (handleAction) {
      handleAction();
    } else {
      navigation.navigate('Favorites');
    }
  };

  return (
    <TouchableOpacity onPress={action}>
      <Image source={icon} style={styles.favorite} />
    </TouchableOpacity>
  );
};

export {FavoritesIcon};
