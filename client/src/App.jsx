import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import BookList from "./features/list_books/BookList";
import AddBook from "./features/add_book/AddBook";
import EditBook from "./features/edit_book/EditBook";

function App() {
  return (
    <div className="max-w-3xl mt-20 mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/edit/:id" element={<EditBook />} />
      </Routes>
    </div>
  );
}

export default App;
