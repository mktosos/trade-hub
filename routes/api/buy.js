const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const booksController = require("../../controllers/booksController");
const buyController = require("../../controllers/buyController");
// Matches with "/api/buy"
router.route("/")
  .get(booksController.findInTransaction)
  .post(usersController.create);

// Matches with "/api/buy"
router.route("/userinprogress/:id")
  .get(booksController.findMyInTransaction)
  .post(usersController.create);  
 
// Matches with "/api/buy/:id"
router.route("/:id")
  .get(usersController.findById)
  .put(buyController.update)
  .delete(usersController.remove);

module.exports = router;
