import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
};

export interface PizzaSliceState {
  items: Pizza[];
  status: string;
}

export type SearchPizzaParams = {
  sortBy: string;
  order: string;
  categoryIndex: number;
  optionActive: any;
};

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  'pizzas/fetchPizzasStatus',
  async (params) => {
    const { categoryIndex, optionActive } = params;
    let { data } = await axios.get<Pizza[]>(
      `https://62bdba87bac21839b609fc45.mockapi.io/pizzas?${
        categoryIndex > 0 ? `category=${categoryIndex}` : ''
      }&sortBy=${optionActive.sortProperty}&order=desc`
    );
    return data;
  }
);

const initialState: PizzaSliceState = {
  items: [],
  status: 'loading', //loading | success | error
};

export const pizzaSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setPizzas(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
  },
  // extraReducers: {
  //   [fetchPizzas.pending]: (state) => {
  //     state.status = 'loading';
  //   },
  //   [fetchPizzas.fulfilled]: (state, action) => {
  //     state.items = action.payload;
  //     state.status = 'success';
  //   },
  //   [fetchPizzas.rejected]: (state, action) => {
  //     console.log(action, 'rejected');
  //     state.status = 'error';
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = 'loading';
      state.items = [];
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    });

    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = 'error';
      state.items = [];
    });
  },
});

export const { setPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
