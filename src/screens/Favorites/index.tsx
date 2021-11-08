/**
 *
 * @format
 */
import {ProductItem} from 'components';
import {Product} from 'models';
import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from 'store';

const FavoritesScreen = () => {
  const {favorites} = useSelector((state: RootState) => state.products);

  const renderProductItem = (product: Product) => (
    <ProductItem key={product.id} product={product} />
  );
  return <View>{favorites.map(renderProductItem)}</View>;
};

export default FavoritesScreen;
