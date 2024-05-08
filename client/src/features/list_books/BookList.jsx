import { useEffect, useState } from "react";
import BookTile from "./BookTile";
import { useGetBooksMutation } from "./listBookApiSlice";
import { Link } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [getBooks, { isLoading }] = useGetBooksMutation();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setError(null);
        const result = await getBooks().unwrap();
        setBooks(result); // Set fetched books in state
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBooks();
  }, [getBooks]);

  return (
    <div className="mx-auto mt-8 grid grid-cols-bookList gap-4">
      {isLoading ? (
        <p>Loading...</p> // Render loading state
      ) : books.length ? (
        books.map((book) => <BookTile book={book} key={book._id} />)
      ) : (
        <p className="text-center col-span-3 mt-8 text-gray-700">
          No books available, Please add some books! <Link to="/add">Add</Link>
        </p>
      )}
    </div>
  );
};

export default BookList;
