import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sort: {
    name: 'Популярности',
    sortProperty: 'rating',
  },
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategoryIndex: (state, action) => {
      state.categoryId = action.payload;
    },
  },
});

export const { setCategoryIndex } = categorySlice.actions;

export default categorySlice.reducer;
