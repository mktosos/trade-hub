const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  condition: { type: String, required: true },
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  description: String,
  condition: String,
  date: { type: Date, default: Date.now },
  seller: { type: String, required: false},
  buyer: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
