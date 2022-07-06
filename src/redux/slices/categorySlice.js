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

    setOptionActive: (state, action) => {
      state.sort = action.payload;
    },

    setParams: (state, action) => {
      state.categoryId = action.payload.categoryIndex;
      state.sort = action.payload.sorted;
    },
  },
});

export const { setCategoryIndex, setOptionActive, setParams } =
  categorySlice.actions;

export default categorySlice.reducer;
