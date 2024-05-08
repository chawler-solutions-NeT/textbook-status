/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const BookTile = ({ book, handleDeleteBook }) => {
  const navigate = useNavigate();
  const { _id: id, title, author, status } = book;

  const handleEdit = () => {
    navigate(`${ROUTES.EDIT_BOOK}/${id}`);
  };

  return (
    <div className="bg-gray-300 p-4 rounded-lg">
      <div className="flex justify-end">
        <p className="text-sm  p-0.5 px-2 rounded-md bg-green-100 text-green-600 ">
          {status ? "Read" : "Unread"}
        </p>
      </div>

      <h2 className="h-14 text-lg font-semibold line-clamp-3 text-ellipsis">
        {title}
      </h2>
      <div className="leading-6 mt-2">
        <p className="text-sm">Author: {author}</p>
      </div>
      <div className="mt-2 flex gap-2">
        <button
          className="px-4 py-2 cursor-pointer hover:underline"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className="px-4 py-2 cursor-pointer text-red-600 hover:underline"
          onClick={() => handleDeleteBook(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookTile;
