import BookForm from "../../components/form/BookForm";
import { useNavigate } from "react-router-dom";
import { useAddNewBookMutation } from "./addBookApiSlice";

const AddBook = () => {
  const navigate = useNavigate();

  const [addBook, { isLoading }] = useAddNewBookMutation();

  const handleOnSubmit = async (book) => {
    await addBook(book);
    navigate("/");
  };
  return (
    <div className="addForm">
      <BookForm isLoading={isLoading} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default AddBook;
