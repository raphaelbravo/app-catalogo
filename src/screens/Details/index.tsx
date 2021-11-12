/**
 *
 * @format
 */
import {DetailImage} from 'components';
import {FavoritestDB} from 'models';
import React from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'store';
import {toggleFavorite} from 'store/products';
import {_alert} from 'utils';
import styles from './styles';

const DetailsScreen = () => {
  const {selectedProduct, favoritesMap} = useSelector(
    (state: RootState) => state.products,
  );

  const dispatch = useDispatch();
  const isFav = selectedProduct ? favoritesMap[`${selectedProduct.id}`] : false;
  const toggleProductFavorite = async (action: boolean) => {
    if (selectedProduct && action) {
      var res = await (isFav
        ? FavoritestDB.delete(favoritesMap[`${selectedProduct.id}`])
        : FavoritestDB.save(selectedProduct));
      dispatch(toggleFavorite({isFav, product: isFav ? selectedProduct : res}));
    }
  };

  const onFavClick = () => {
    const message = `Quieres ${isFav ? 'quitar' : 'agregar'} este producto ${
      isFav ? 'de' : 'a'
    } favoritos`;
    _alert({
      message,
      action: toggleProductFavorite,
    });
  };
  const isFavActive = isFav !== undefined && isFav;
  return (
    <View style={styles.container}>
      {selectedProduct && (
        <DetailImage
          product={selectedProduct}
          isFavActive={isFavActive as boolean}
          onFavClick={onFavClick}
        />
      )}
    </View>
  );
};

export default DetailsScreen;
