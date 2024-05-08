import { useNavigate, useParams } from "react-router-dom";
import BookForm from "./form/BookForm";
import { useEffect, useState } from "react";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({});

  const handleOnSubmit = (book) => {
    navigate("/");
  };

  useEffect(() => {
    setBook({});
  });

  return (
    <div className="addForm">
      <BookForm book={book} handleSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditBook;
