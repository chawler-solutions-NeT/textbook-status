import { apiSlice } from "../../redux/api/apiSlice";

export const addBookApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addNewBook: builder.mutation({
      query: (book) => ({
        url: "books/",
        method: "POST",
        body: book,
      }),
    }),
  }),
});

export const { useAddNewBookMutation } = addBookApiSlice;
