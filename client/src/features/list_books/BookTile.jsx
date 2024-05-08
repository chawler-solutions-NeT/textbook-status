/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const BookTile = ({ book }) => {
  const navigate = useNavigate();
  const { _id: id, title, author } = book;
  return (
    <div className="bg-gray-300 p-4 rounded-lg">
      <h2>{title}</h2>
      <div className="leading-6 mt-2">
        <p>Author: {author}</p>
      </div>
      <div className="mt-4 flex gap-2">
        <button
          className="px-4 py-2 cursor-pointer"
          onClick={() => navigate(`/edit/${id}`)}
        >
          Edit
        </button>
        <button className="px-4 py-2 cursor-pointer" onClick={() => {}}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookTile;
