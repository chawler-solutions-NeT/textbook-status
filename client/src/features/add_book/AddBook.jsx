import BookForm from "../../components/form/BookForm";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();

  const handleOnSubmit = (book) => {
    navigate("/");
  };
  return (
    <div className="addForm">
      <BookForm handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default AddBook;
