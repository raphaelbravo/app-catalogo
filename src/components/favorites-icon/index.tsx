/**
 *
 * @format
 */
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from 'navigation';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

type FavoritesProps = NavigationProp<RootStackParamList, 'Products'>;

const FavoritesIcon = () => {
  const navigation = useNavigation<FavoritesProps>();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Favorites');
        }}>
        <Text>Fav</Text>
      </TouchableOpacity>
    </View>
  );
};

export {FavoritesIcon};
