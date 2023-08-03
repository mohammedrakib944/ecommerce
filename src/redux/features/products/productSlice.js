import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      return (state = payload);
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
