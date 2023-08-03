import { apiSlice } from "../api/apiSlice";
import { setUser } from "../user/userSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // LOGIN HANDLER
    login: builder.mutation({
      query: (data) => ({
        url: "/api/users/google-auth",
        method: "POST",
        body: data,
      }),
      //   keepUnusedDataFor: 600,
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const { payload } = result.data;
          if (payload) {
            //set data on localstorage
            localStorage.setItem(
              "auth",
              JSON.stringify({
                access_token: payload.access_token,
                user_id: payload.user._id,
              })
            );
            //update redux store
            dispatch(setUser(payload.user));
          }
        } catch (error) {
          // do nothing
        }
      },
      // @ignore
      overrideExisting: module.hot?.status() === "apply",
    }),
  }),
});

export const { useLoginMutation } = authApi;
