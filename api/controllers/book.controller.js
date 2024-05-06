import Book from "../models/book.model.js";

// @desc Get all books
// @route GET /books
// @access Public
export const getAllBooks = async (req, res) => {
  // Get all books from database
  const books = await Book.find().lean();

  // If no books
  if (!books?.length) {
    return res.status(400).json({ message: "No book found" });
  }

  res.json(books);
};

// @desc Get a book by ID
// @route GET /books/:id
// @access Public
export const getBook = async (req, res) => {
  // Confirm book exists
  const { id } = req.params;
  const book = await Book.findById(id).exec();

  if (!book) {
    return res.status(400).json({ message: "Book not found" });
  }

  res.json(book);
};

// @desc Create new book
// @route POST /book
// @access Public
export const addNewBook = async (req, res) => {
  const { title, author } = req.body;

  // Confirm data
  if (!title || !author) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Create and store the new user
  const book = await Book.create({ title, author });

  if (book) {
    // Created
    return res.status(201).json({ message: "New book created" });
  } else {
    return res.status(400).json({ message: "Invalid book data received" });
  }
};

// @desc Update a book
// @route PATCH /books/:id
// @access Public
export const updateBook = async (req, res) => {
  const { title, author, status } = req.body;
  const { id } = req.params;

  // Confirm data
  if (!title || !author || typeof status !== "boolean") {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Confirm book exists to update
  const book = await Book.findById(id).exec();

  if (!book) {
    return res.status(400).json({ message: "Book not found" });
  }

  book.title = title;
  book.author = author;
  book.status = status;

  const updatedBook = await book.save();

  res.json(`'${updatedBook.title}' updated`);
};

// @desc Delete a book
// @route DELETE /books/:id
// @access Public
export const deleteBook = async (req, res) => {
  const { id } = req.params;

  // Confirm data
  if (!id) {
    return res.status(400).json({ message: "Book ID required" });
  }

  // Confirm book exists to delete
  const book = await Book.findById(id).exec();

  if (!book) {
    return res.status(400).json({ message: "book not found" });
  }

  const result = await book.deleteOne();

  const reply = `Book '${result.title}' with ID ${result._id} deleted`;

  res.json(reply);
};
