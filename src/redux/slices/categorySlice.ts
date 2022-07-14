import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum SortPropertyEnum {
  RATING = 'rating',
  TITLE = 'title',
  PRICE = 'price',
}

export type Sort = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  sort: Sort;
}

const initialState: FilterSliceState = {
  categoryId: 0,
  searchValue: '',
  sort: {
    name: 'Популярности',
    sortProperty: SortPropertyEnum.RATING,
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
