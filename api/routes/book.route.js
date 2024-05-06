import { Router } from "express";
import {
  getAllBooks,
  addNewBook,
  deleteBook,
  updateBook,
  getBook,
} from "../controllers/book.controller.js";

const router = Router();

router
  .get("/", getAllBooks)
  .post("/", addNewBook)
  .get("/:id", getBook)
  .delete("/:id", deleteBook)
  .patch("/:id", updateBook);

export default router;
