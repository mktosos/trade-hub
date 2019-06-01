const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const isAuthenticated = require("../../controllers/authentication");

// Matches with "/api/books"
router.route("/")
  .get(isAuthenticated, booksController.findAll)
  .post(isAuthenticated, booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(isAuthenticated, booksController.findById)
  .put(isAuthenticated, booksController.update)
  .delete(isAuthenticated, booksController.remove);

module.exports = router;
