import { apiSlice } from "../api/apiSlice";

export const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // fetch all order by admin
    getAllOrders: builder.query({
      query: () => ({
        url: `/api/order`,
      }),
      providesTags: ["Orders"],
    }),
    // fetch Order by user_id
    getOrder: builder.query({
      query: (user_id) => ({
        url: `/api/order/${user_id}`,
      }),
    }),
    // Get single order
    getSingleOrder: builder.query({
      query: (order_id) => ({
        url: `/api/order/singe/${order_id}`,
        method: "GET",
      }),
    }),
    // add Order
    createOrder: builder.mutation({
      query: (user_id) => ({
        url: "/api/order/",
        method: "POST",
        body: { user_id },
      }),
      invalidatesTags: ["Cart"],
    }),
    // delete order
    deleteOrder: builder.mutation({
      query: (order_id) => ({
        url: `/api/order/remove/${order_id}`,
        method: "DELETE",
      }),
    }),
    // Payment Success
    paymentSuccess: builder.mutation({
      query: (order_id) => ({
        url: `/api/order/payment/${order_id}`,
        method: "PATCH",
      }),
    }),
    // Edit status
    editStatus: builder.mutation({
      query: (data) => ({
        url: `/api/order/status`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});

export const {
  useGetAllOrdersQuery,
  useGetOrderQuery,
  useGetSingleOrderQuery,
  useCreateOrderMutation,
  useDeleteOrderMutation,
  usePaymentSuccessMutation,
  useEditStatusMutation,
} = orderApi;
