/**
 *
 * @format
 */
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Product} from 'models';
import {RootStackParamList} from 'navigation';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
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
  const {name} = product;

  const action = () => {
    dispatch(setSelectedProduct(product));
    navigation.navigate('Details');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={action}>
        <Text>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export {ProductItem};
