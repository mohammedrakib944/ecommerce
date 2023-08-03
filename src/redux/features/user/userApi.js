import { apiSlice } from "../api/apiSlice";
import { setUser } from "./userSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all User
    getAllUser: builder.query({
      query: () => ({
        url: `/api/users`,
      }),
    }),

    // get User
    getUser: builder.query({
      query: (userId) => ({
        url: `/api/users/${userId}`,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          //update redux store
          dispatch(setUser(result.data.payload.user));
        } catch (error) {
          // do nothing
        }
      },
      // @ignore
      // overrideExisting: module.hot?.status() === "apply",
    }),

    // Update user
    updateUser: builder.mutation({
      query: ({ user_id, data }) => ({
        url: `/api/users/${user_id}`,
        method: "PATCH",
        body: data,
      }),
    }),

    // Upload products Image
    uploadImages: builder.mutation({
      query: ({ data, userId }) => ({
        url: `/api/products-image/${userId}`,
        method: "POST",
        body: data,
        formData: true,
        // credentials: "include",
      }),
    }),

    // Get products Image
    getImages: builder.query({
      query: (userId) => ({
        url: `/api/products-image/${userId}`,
        method: "GET",
      }),
    }),

    // Delete Image
    deleteImage: builder.mutation({
      query: ({ imageName, userId }) => ({
        url: `/api/products-image/${userId}`,
        method: "DELETE",
        body: { image_name: imageName },
      }),
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useGetUserQuery,
  useGetImagesQuery,
  useUpdateUserMutation,
  useUploadImagesMutation,
  useDeleteImageMutation,
} = userApi;
