import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: null,
  reducers: {
    addItem: (state, { payload }) => {
      return [...state, ...payload];
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
