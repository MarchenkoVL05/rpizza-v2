import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from './slices/categorySlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    cart: cartReducer,
  },
});
