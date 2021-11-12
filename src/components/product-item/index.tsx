/**
 *
 * @format
 */
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MText} from 'components';
import {ICONS} from 'images';
import {Product} from 'models';
import {RootStackParamList} from 'navigation';
import React from 'react';
import {Image, ImageSourcePropType, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {setSelectedProduct} from 'store/products';
import styles from './styles';
interface Props {
  product: Product;
}
type ProductScreenProps = NavigationProp<RootStackParamList, 'Products'>;

const ProductItem = ({product}: Props) => {
  const navigation = useNavigation<ProductScreenProps>();
  const dispatch = useDispatch();
  const {name, image, price} = product;

  const action = () => {
    dispatch(setSelectedProduct(product));
    navigation.navigate('Details');
  };

  const renderImage = () => {
    const imageConfig: ImageSourcePropType = {uri: image, cache: 'force-cache'};
    return (
      <View style={styles.imageContainer}>
        <Image source={imageConfig} resizeMode="cover" style={styles.image} />
      </View>
    );
  };

  const renderPrice = () => {
    const formatted = `S/ ${price.toFixed(1)}`;
    return (
      <View style={styles.priceContainer}>
        <Image source={ICONS.COINS} style={styles.coins} />
        <MText style={styles.price}>{formatted}</MText>
      </View>
    );
  };

  return (
    <TouchableOpacity onPress={action} style={styles.container}>
      {renderImage()}
      <MText style={styles.name}>{name}</MText>
      {renderPrice()}
    </TouchableOpacity>
  );
};

export {ProductItem};
