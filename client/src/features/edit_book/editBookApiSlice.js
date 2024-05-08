import { apiSlice } from "../../redux/api/apiSlice";

export const editBookApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateBook: builder.mutation({
      query: ({ id, ...book }) => ({
        url: `books/${id}`,
        method: "PATCH",
        body: book,
      }),
    }),
  }),
});

export const { useUpdateBookMutation } = editBookApiSlice;
