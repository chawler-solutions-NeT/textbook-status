import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import BookList from "./features/list_books/BookList";
import AddBook from "./features/add_book/AddBook";
import EditBook from "./features/edit_book/EditBook";
import { ROUTES } from "./constants/routes";

function App() {
  return (
    <div className="max-w-3xl mt-20 mx-auto">
      <Header />
      <Routes>
        <Route path={ROUTES.LIST_BOOKS} element={<BookList />} />
        <Route path={ROUTES.ADD_BOOK} element={<AddBook />} />
        <Route path={ROUTES.EDIT_BOOK + "/:id"} element={<EditBook />} />
      </Routes>
    </div>
  );
}

export default App;
