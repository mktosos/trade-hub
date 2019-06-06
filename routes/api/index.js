const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require('./users');
const buyRoutes = require('./buy');

// Book routes
router.use("/books", bookRoutes);
router.use("/buy", buyRoutes);
router.use('/users', userRoutes);

module.exports = router;
