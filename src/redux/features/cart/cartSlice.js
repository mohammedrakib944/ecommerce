import { createSlice } from "@reduxjs/toolkit";

const cartItems =
  typeof window !== "undefined"
    ? JSON.parse(window.localStorage.getItem("cart_items"))
    : false;

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
