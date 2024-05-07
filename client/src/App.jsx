import Header from "./components/Header";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import ListBook from "./features/list_books/ListBooks";
import AddBook from "./features/add_book/AddBook";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<ListBook />} />
        <Route path="add" element={<AddBook />} />
      </Routes>
    </>
  );
}

export default App;
