/**
 *
 * @format
 */
import {ProductItem} from 'components';
import {FavoritestDB, Product} from 'models';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'store';
import {toggleFavorite} from 'store/products';

const DetailsScreen = () => {
  const {selectedProduct, favoritesMap} = useSelector(
    (state: RootState) => state.products,
  );
  const dispatch = useDispatch();
  const isFav = selectedProduct ? favoritesMap[`${selectedProduct.id}`] : false;
  const {image, name, description, price, quantity, categoryName} =
    selectedProduct as Product;
  return (
    <View>
      <TouchableOpacity
        onPress={async () => {
          if (selectedProduct) {
            var res = await (isFav
              ? FavoritestDB.delete(favoritesMap[`${selectedProduct.id}`])
              : FavoritestDB.save(selectedProduct));
            dispatch(
              toggleFavorite({isFav, product: isFav ? selectedProduct : res}),
            );
          }
        }}>
        <Text>{isFav ? 'UnFav' : 'Fav'}</Text>
      </TouchableOpacity>
      {selectedProduct && (
        <View>
          <Image source={{uri: image}} style={{width: 100, height: 100}} />
          <Text>{name}</Text>
          <Text>{description}</Text>
          <Text>S/ {price}</Text>
          <Text>{quantity} unidades</Text>
          <Text>Categoria: {categoryName}</Text>
        </View>
      )}
    </View>
  );
};

export default DetailsScreen;
