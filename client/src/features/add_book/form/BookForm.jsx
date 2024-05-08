/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookForm = ({ book }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: book ?? "",
    author: book ?? "",
    status: book ?? false,
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData({ ...formData, [name]: name === "status" ? checked : value });
  };

  const renderInputField = (label, placeholder, name) => (
    <div className="flex flex-col gap-2 mb-4">
      <label>{label}</label>
      <input
        className="px-2 indent-2 h-10"
        id={name}
        value={formData[name]}
        onChange={handleChange}
        name={name}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );

  const disabledSubmit = !formData.title || !formData.author;

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <form className="m-8 max-w-sm mx-auto" onSubmit={handleSubmit}>
      {renderInputField("Book Title", "Enter title of book...", "title")}
      {renderInputField("Book Author", "Enter name of author...", "author")}
      <div className="flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          id="status"
          name="status"
          className="w-4 h-4"
          checked={formData.status}
          onChange={handleChange}
        />
        <label htmlFor="status">Read</label>
      </div>
      <button
        type="submit"
        className={`bg-[#222] border text-white w-full p-2 text-base cursor-pointer mt-4 ${
          disabledSubmit ? "bg-[#ddd] border-[#ddd] cursor-default" : ""
        }`}
        disabled={disabledSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default BookForm;
