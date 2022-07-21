import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './items/itemsSlice';
import filterReducer from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    filter: filterReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
