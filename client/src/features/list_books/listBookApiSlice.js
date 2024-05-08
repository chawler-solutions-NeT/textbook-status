import { apiSlice } from "../../redux/api/apiSlice";

export const listBookApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.mutation({
      query: () => ({
        url: "books/",
      }),
    }),
    getBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
      }),
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBooksMutation,
  useGetBookMutation,
  useDeleteBookMutation,
} = listBookApiSlice;
