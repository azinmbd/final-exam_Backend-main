const  book= require('../../controllers/booklist.controllers');
const router = require("express").Router();

router.post("/", book.add )
router.post("/:id", book.updateBookById )
router.get("/", book.getAllBooks )
router.post("/:id", book.getBookById )
router.delete("/:id", book.DeleteBookById )



module.exports = {
    BookRoutes: router
}