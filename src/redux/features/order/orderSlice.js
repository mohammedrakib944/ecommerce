import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total_price: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state, { payload }) => {
      return (state = payload);
    },
  },
});

export const { setOrder } = orderSlice.actions;
export default orderSlice.reducer;
