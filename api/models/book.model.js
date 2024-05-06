import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    read: {
      type: Boolean,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const Book = mongoose.model("Listing", bookSchema);

export default Book;
