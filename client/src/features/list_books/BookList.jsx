import { useEffect, useState } from "react";
import BookTile from "./BookTile";
import { useDeleteBookMutation, useGetBooksMutation } from "./listBookApiSlice";
import { Link } from "react-router-dom";

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
        setError(error.message);
      }
    };

    fetchBooks();
  }, [getBooks]);

  const handleDeleteBook = async (bookId) => {
    try {
      await deleteBook(bookId);
      setBooks((prev) => prev.filter((book) => book._id !== bookId));
    } catch (error) {
      print(error);
    }
  };

  return (
    <div className="mx-auto p-8 mt-8 grid grid-cols-bookList gap-4">
      {isLoading ? (
        <p>Loading...</p> // Render loading state
      ) : books.length ? (
        books.map((book) => (
          <BookTile
            book={book}
            key={book._id}
            handleDeleteBook={handleDeleteBook}
          />
        ))
      ) : (
        <p className="flex flex-col gap-4 text-center col-span-3 mt-8 text-gray-700">
          No books available, Please add some books!{" "}
          <Link to="/add" className="font-bold cursor-pointer hover:underline">
            Add
          </Link>
        </p>
      )}
    </div>
  );
};

export default BookList;
