import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import ListBook from "./features/list_books/ListBooks";
import AddBook from "./features/add_book/AddBook";

function App() {
  return (
    <div className="max-w-3xl mt-20 mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<ListBook />} />
        <Route path="add" element={<AddBook />} />
      </Routes>
    </div>
  );
}

export default App;
