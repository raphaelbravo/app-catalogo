import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ProductAPI} from 'api';
import {Category, FavoriteSchema, FavoritestDB, Product} from 'models';
import {_loading} from 'utils';

export type ProductState = {
  categories: Category[];
  favorites: Product[];
  favoritesMap: {[key: string]: Product};
  selectedProduct: Product | null;
  nextPage: number | null;
};

type QueryProducts = {
  query?: string;
  nextPage?: number | null;
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({query, nextPage}: QueryProducts = {query: '', nextPage: null}) => {
    return await ProductAPI.GET({
      page: nextPage || 1,
      limit: 5,
      query: query || '',
    });
  },
);
export const fetchFavorites = createAsyncThunk(
  'products/fetchFavorites',
  async () => {
    return await FavoritestDB.get();
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    categories: [],
    favorites: [],
    favoritesMap: {},
    selectedProduct: null,
    nextPage: null,
  } as ProductState,
  reducers: {
    setSelectedProduct(state, action) {
      state.selectedProduct = action.payload;
    },
    toggleFavorite(state, action) {
      const {product, isFav} = action.payload;
      if (isFav) {
        //REMOVE FAVORITE FROM STATE
        state.favorites = state.favorites.filter(x => x.id !== product.id);
        delete state.favoritesMap[`${product.id}`];
      } else {
        //ADD FAVORITE TO STATE
        state.favorites = [...state.favorites, product];
        state.favoritesMap[`${product.id}`] = product;
      }
    },
  },
  extraReducers: builder => {
    // fetchProducts - actions
    builder.addCase(fetchProducts.pending, () => {
      _loading(true);
    });
    builder.addCase(fetchProducts.fulfilled, (state, action: any) => {
      var {items: data, nextPage} = action.payload;

      var categories: {[key: string]: Category} = state.categories.reduce(
        (prev, x: Category) => ({...prev, [`${x.id}`]: {...x}}),
        {},
      );

      for (let i = 0; i < data.length; i++) {
        const {categoryId, categoryName} = data[i];
        categories[`${categoryId}`] = categories[`${categoryId}`] || {
          id: categoryId,
          name: categoryName,
          items: [],
        };
        categories[`${categoryId}`].items.push(data[i]);
      }

      state.categories = Object.values(categories);
      state.nextPage = nextPage;
      _loading(false);
    });
    builder.addCase(fetchProducts.rejected, () => {
      _loading(true);
    });
    // fetchFavorites - actions
    builder.addCase(fetchFavorites.fulfilled, (state, action: any) => {
      const parseProducts: Product[] = action.payload.map(
        (item: FavoriteSchema) => ({
          ...item,
          id: item.product_id,
        }),
      );
      state.favoritesMap = parseProducts.reduce(
        (prev: {[key: string]: Product}, item: Product) => ({
          ...prev,
          [`${item.id}`]: item,
        }),
        {},
      );
      state.favorites = parseProducts;
    });
  },
});

export const {setSelectedProduct, toggleFavorite} = productsSlice.actions;

export default productsSlice.reducer;
