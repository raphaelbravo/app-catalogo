/**
 *
 * @format
 */
import {ProductItem} from 'components';
import {Product} from 'models';
import React from 'react';
import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from 'store';
import styles from './styles';

const FavoritesScreen = () => {
  const {favorites} = useSelector((state: RootState) => state.products);

  const renderProductItem = ({item}: {item: Product}) => (
    <ProductItem key={item.id} product={item} />
  );

  const keyExtractor = ({id}: Product) => `${id}`;

  return (
    <View>
      <FlatList<Product>
        data={favorites}
        renderItem={renderProductItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
};

export default FavoritesScreen;
