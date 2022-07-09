import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  searchValue: '',
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

    setOptionActive: (state, action) => {
      state.sort = action.payload;
    },

    setParams: (state, action) => {
      state.categoryId = action.payload.categoryIndex;
      state.sort = action.payload.sorted;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategoryIndex, setOptionActive, setParams, setSearchValue } =
  categorySlice.actions;

export default categorySlice.reducer;
