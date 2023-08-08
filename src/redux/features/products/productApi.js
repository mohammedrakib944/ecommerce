import { apiSlice } from "../api/apiSlice";
import { setProducts } from "./productSlice";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all products
    getProducts: builder.query({
      query: ({ search }) => ({
        url: `/products/${search}`,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          //update redux store
          dispatch(setProducts(result.data));
        } catch (error) {
          // do nothing
        }
      },
      providesTags: ["Products"],
    }),

    // get single products
    getSignleProduct: builder.query({
      query: (product_id) => ({
        url: `/api/products/${product_id}`,
      }),
    }),

    // upload product
    uploadProduct: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/api/products",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),

    // edit product
    editProduct: builder.mutation({
      query: ({ product_id, data }) => ({
        method: "PATCH",
        url: `/api/products/${product_id}`,
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),

    // delete product
    deleteProduct: builder.mutation({
      query: (product_id) => ({
        method: "DELETE",
        url: `/api/products/${product_id}`,
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSignleProductQuery,
  useUploadProductMutation,
  useEditProductMutation,
  useDeleteProductMutation,
} = productApi;
