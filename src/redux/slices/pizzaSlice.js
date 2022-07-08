import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzasStatus',
  async (params) => {
    const { categoryIndex, optionActive } = params;
    let { data } = await axios.get(
      `https://62bdba87bac21839b609fc45.mockapi.io/pizzas?${
        categoryIndex > 0 ? `category=${categoryIndex}` : ''
      }&sortBy=${optionActive.sortProperty}&order=desc`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: 'loading', //loading | success | error
};

export const pizzaSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setPizzas(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchPizzas.rejected]: (state, action) => {
      console.log(action, 'rejected');
      state.status = 'error';
    },
  },
});

export const { setPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
