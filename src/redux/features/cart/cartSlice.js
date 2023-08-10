import { createSlice } from "@reduxjs/toolkit";

const cartItems = JSON.parse(localStorage.getItem("cart_items"));

const cartSlice = createSlice({
  name: "cart",
  initialState: cartItems || [],
  reducers: {
    setCartItems: (state) => {
      return (state = JSON.parse(localStorage.getItem("cart_items")));
    },
  },
});

export const { setCartItems } = cartSlice.actions;
export default cartSlice.reducer;
