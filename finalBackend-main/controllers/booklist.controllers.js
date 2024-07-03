const { BookModel } = require("../models/book");

async function add(req, res, next) {
  console.log(req);
  try {
    const { title, author, description } = req.body;
    console.log("BODY IS " + req.body);
    console.log(title);
    console.log(author);
    console.log(description);
    const book = await BookModel.create({
      title,
      author,
      description,
    });
    return res.status(201).json(book);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function getAllBooks(req, res, next) {
  try {
 
    const books = await BookModel.find({});
    return res.status(200).json(books);
  } catch (error) {
    next(error);
  }
}
async function getBookById(req, res, next) {
  try {
    const book_id = req.params.id;
    const books = await BookModel.find({_id: book_id});
    return res.status(200).json(books);
  } catch (error) {
    next(error);
  }
}
async function DeleteBookById(req, res, next) {
  try {
    // console.log(req);
    const book_id = req.params.id;
    const books = await BookModel.findByIdAndDelete({ _id: book_id });
    return res.status(204).json(books);
  } catch (error) {
    next(error);
  }
}



async function updateBookById(req, res, next) {
  try {
    const bookId = req.params.id;
    const { title, author, description } = req.body;
    const updatedBook = await BookModel.findByIdAndUpdate(
      bookId,
      { title, author, description },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json(updatedBook);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  add,
  getAllBooks,
  getBookById,
  DeleteBookById,
  updateBookById
};
