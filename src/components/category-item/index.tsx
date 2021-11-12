/**
 *
 * @format
 */
import {MText, ProductItem} from 'components';
import {Category, Product} from 'models';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
interface Props {
  category: Category;
}

const CategoryItem = ({category}: Props) => {
  const {name, items} = category;

  const renderProductItem = (product: Product) => (
    <ProductItem key={product.id} product={product} />
  );
  const renderCategoryBox = () => (
    <View style={styles.categoryContainer}>
      <MText style={styles.categoryTitle}>{name}</MText>
    </View>
  );
  return (
    <View style={styles.container}>
      {renderCategoryBox()}
      {items.map(renderProductItem)}
    </View>
  );
};

export {CategoryItem};
