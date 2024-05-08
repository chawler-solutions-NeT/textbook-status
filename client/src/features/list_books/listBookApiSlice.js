import { API_CONSTANTS } from "../../constants/apiConstants";
import { apiSlice } from "../../redux/api/apiSlice";

export const listBookApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.mutation({
      query: () => ({
        url: API_CONSTANTS.BOOKS,
      }),
    }),
    getBook: builder.mutation({
      query: (id) => ({
        url: `${API_CONSTANTS.BOOKS}/${id}`,
      }),
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `${API_CONSTANTS.BOOKS}/${id}`,
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
