/**
 *
 * @format
 */
import {CategoryItem, SearchField} from 'components';
import {Category} from 'models';
import React, {useEffect} from 'react';
import {Alert, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'store';
import {fetchFavorites, fetchProducts} from 'store/products';
import styles from './styles';

const ProductsScreen = () => {
  const {categories, nextPage} = useSelector(
    (state: RootState) => state.products,
  );
  const dispatch = useDispatch();

  const renderCategoryItem = (category: Category) => (
    <CategoryItem key={category.id} category={category} />
  );

  const handleSearch = (query: string) => dispatch(fetchProducts({query}));

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <SearchField handleSearch={handleSearch} delay={750} />
      <FlatList
        data={categories}
        renderItem={({item}) => renderCategoryItem(item)}
        keyExtractor={item => item.id.toString()}
      />
      {nextPage && (
        <TouchableOpacity
          onPress={() => {
            dispatch(fetchProducts({nextPage}));
          }}>
          <Text
            style={{
              backgroundColor: 'blue',
              lineHeight: 30,
            }}>
            Ver mas
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ProductsScreen;
