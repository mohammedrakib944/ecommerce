import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get category
    getCategory: builder.query({
      query: () => ({
        url: "/api/category",
      }),
      providesTags: ["Category"],
    }),
    // add category
    addCategory: builder.mutation({
      query: ({ user_id, category_name }) => ({
        url: "/api/category",
        method: "POST",
        body: { user_id, category_name },
      }),
      invalidatesTags: ["Category"],
    }),

    // Update category
    updateCategory: builder.mutation({
      query: ({ category_id, data }) => ({
        url: `/api/category/${category_id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),

    // Delete category
    deleteCategory: builder.mutation({
      query: (category_id) => ({
        url: `/api/category/${category_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
