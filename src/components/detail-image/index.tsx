/**
 *
 * @format
 */
import {FavoritesIcon, MText} from 'components';
import {ICONS} from 'images';
import {Product} from 'models';
import React, {useRef} from 'react';
import {
  Animated,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
const INIT = 4;
const END = 0.03;
interface Props {
  product: Product;
  onFavClick: () => void;
  isFavActive: boolean;
}
const DetailImage = ({product, onFavClick, isFavActive}: Props) => {
  var fullScreen = false;
  const fadeAnim = useRef(new Animated.Value(INIT)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: !fullScreen ? END : INIT,
      duration: 400,
      useNativeDriver: false,
    }).start();
    fullScreen = !fullScreen;
  };
  const {image, name, description, price, quantity, categoryName} = product;
  const renderImage = () => {
    const source: ImageSourcePropType = {
      uri: image,
      cache: 'force-cache',
    };
    return <Image source={source} style={styles.image} />;
  };
  const renderPrice = () => {
    const formatted = `S/ ${price.toFixed(1)}`;
    return (
      <View style={styles.infoContainer}>
        <Image source={ICONS.COINS} style={styles.icon} />
        <MText style={styles.value}>{formatted}</MText>
      </View>
    );
  };
  const renderQuantity = () => {
    return (
      <View style={styles.infoContainer}>
        <Image source={ICONS.QUANTITY} style={styles.icon} />
        <MText style={styles.value}>{quantity} unidades</MText>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={fadeIn}
          style={styles.imageTouchable}>
          {renderImage()}
        </TouchableOpacity>
      </View>
      <Animated.View
        style={[
          styles.detailContainer,
          {
            flex: fadeAnim,
          },
        ]}>
        <View style={styles.content}>
          <View style={styles.headerContainer}>
            <MText style={styles.title}>{name}</MText>
            <FavoritesIcon active={isFavActive} handleAction={onFavClick} />
          </View>
          <MText style={styles.category}>{categoryName}</MText>
          <MText style={styles.label}>{description}</MText>
          {renderPrice()}
          {renderQuantity()}
        </View>
      </Animated.View>
    </View>
  );
};

export {DetailImage};
