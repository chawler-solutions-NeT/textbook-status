import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BookForm from "../../components/form/BookForm";
import { useGetBookMutation } from "../list_books/listBookApiSlice";
import { useUpdateBookMutation } from "./editBookApiSlice";

const EditBook = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);
  const [updateBook, { isLoading }] = useUpdateBookMutation();
  const [getBook, { isLoading: isGetLoading }] = useGetBookMutation();

  const handleOnSubmit = async (book) => {
    const { id } = params;
    try {
      const payload = { ...book, id };
      await updateBook(payload);
      navigate("/");
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    const { id } = params;

    const fetchBook = async () => {
      try {
        setError(null);
        const result = await getBook(id).unwrap();
        setBook(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBook();
  }, [getBook, params]);

  return (
    <div className="p-8">
      {!isGetLoading && (
        <BookForm
          book={book}
          isUpdate={true}
          isLoading={isLoading}
          handleOnSubmit={handleOnSubmit}
        />
      )}
    </div>
  );
};

export default EditBook;
