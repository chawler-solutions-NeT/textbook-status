import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookTile from "./BookTile";
import { useDeleteBookMutation, useGetBooksMutation } from "./listBookApiSlice";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [getBooks, { isLoading }] = useGetBooksMutation();
  const [deleteBook] = useDeleteBookMutation();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setError(null);
        const result = await getBooks().unwrap();
        setBooks(result);
      } catch (error) {
        setError(error);
      }
    };

    fetchBooks();
  }, [getBooks]);

  const handleDeleteBook = async (bookId) => {
    try {
      await deleteBook(bookId);
      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== bookId));
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="mx-auto p-8 mt-8">
      {isLoading && (
        <div className="flex justify-center items-center h-40">
          <p>Loading...</p>
        </div>
      )}

      {!isLoading && !error && books.length > 0 && (
        <div className="grid justify-center items-center grid-cols-bookList gap-4">
          {books.map((book) => (
            <BookTile
              key={book._id}
              book={book}
              handleDeleteBook={handleDeleteBook}
            />
          ))}
        </div>
      )}

      {!isLoading && !error && books.length === 0 && (
        <div>
          <p className="flex flex-col gap-4 text-center col-span-3 mt-8 text-gray-700">
            No books available. <br />
            Please add some books!{" "}
            <Link
              to="/add"
              className="font-bold cursor-pointer hover:underline"
            >
              Add
            </Link>
          </p>
        </div>
      )}

      {!isLoading && error && (
        <div className="flex justify-center items-center h-40 text-red-500 mt-4">
          <p>An error occurred: {error.message}</p>
        </div>
      )}
    </div>
  );
};

export default BookList;
