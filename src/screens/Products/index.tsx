/**
 *
 * @format
 */
import {CategoryItem, LoadMore, SearchField} from 'components';
import {Category} from 'models';
import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'store';
import {fetchFavorites, fetchProducts} from 'store/products';
import styles from './styles';

const ProductsScreen = () => {
  const {categories, nextPage} = useSelector(
    (state: RootState) => state.products,
  );
  const dispatch = useDispatch();

  const handleSearch = (query: string) => dispatch(fetchProducts({query}));

  const loadMoreItems = () => dispatch(fetchProducts({nextPage}));

  const renderCategoryItem = ({item}: {item: Category}) => (
    <CategoryItem key={item.id} category={item} />
  );

  const keyExtractor = ({id}: Category) => `${id}`;

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <SearchField handleSearch={handleSearch} />
      <FlatList<Category>
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={keyExtractor}
      />
      {nextPage && <LoadMore action={loadMoreItems} />}
    </View>
  );
};

export default ProductsScreen;
