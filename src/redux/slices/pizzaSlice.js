import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const pizzaSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setPizzas(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
