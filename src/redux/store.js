import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import userSlice from "./features/user/userSlice";
import orderSlice from "./features/order/orderSlice";
import productSlice from "./features/products/productSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userSlice,
    order: orderSlice,
    product: productSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([apiSlice.middleware]),
  devTools: process.env.NODE_ENV !== "production",
});
