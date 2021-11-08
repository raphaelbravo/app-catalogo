/**
 *
 * @format
 */
import {ProductItem} from 'components';
import {Category, Product} from 'models';
import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
interface Props {
  category: Category;
}

const CategoryItem = ({category}: Props) => {
  const {name, items} = category;
  const renderProductItem = (product: Product) => (
    <ProductItem key={product.id} product={product} />
  );
  return (
    <View style={styles.container}>
      <Text
        style={{
          backgroundColor: 'red',
          lineHeight: 100,
        }}>
        {name}
      </Text>
      {items.map(renderProductItem)}
    </View>
  );
};

export {CategoryItem};
