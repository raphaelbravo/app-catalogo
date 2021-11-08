import {configureStore, combineReducers} from '@reduxjs/toolkit';
import productsReducer from './products';

const combinedReducer = combineReducers({
  products: productsReducer,
});

export type RootState = ReturnType<typeof combinedReducer>;

export const store = configureStore({
  reducer: combinedReducer,
});
