import { API_CONSTANTS } from "../../constants/apiConstants";
import { apiSlice } from "../../redux/api/apiSlice";

export const addBookApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addNewBook: builder.mutation({
      query: (book) => ({
        url: API_CONSTANTS.BOOKS,
        method: "POST",
        body: book,
      }),
    }),
  }),
});

export const { useAddNewBookMutation } = addBookApiSlice;
