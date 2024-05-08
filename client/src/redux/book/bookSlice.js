import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentBook: null,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    updateBook: (state, action) => {
      state.currentBook = action.payload;
    },
  },
});

export const { updateBook } = bookSlice.actions;

export default bookSlice.reducer;
