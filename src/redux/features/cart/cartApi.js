import { apiSlice } from "../api/apiSlice";

export const cartApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get cart
    getCart: builder.query({
      query: (user_id) => ({
        url: `/api/cart/${user_id}`,
      }),
      providesTags: ["Cart"],
    }),
    // add cart
    addToCart: builder.mutation({
      query: (data) => ({
        url: "/api/cart",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Cart"],
    }),
    // delete cart
    removeCartItem: builder.mutation({
      query: (cart_id) => ({
        url: `/api/cart/${cart_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useRemoveCartItemMutation,
} = cartApi;
