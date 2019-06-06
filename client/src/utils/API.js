import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets books except sellers
  getBookSansSeller: function(id) {
    return axios.get("/api/users/books/" + id);
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  //Gets the book with the given id
  getBookBySeller: function(id) {
    return axios.get("/api/users/books/" + id);
  },
  // Gets books with the given user's id
  getUserBooks: function(id){
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },  
    // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  
  login: function(userData) {
    return axios.post("/api/users/login", userData);
  },
  // adds a buyer: _id to the books seller field,  sets inTransaction to true
  buyBook: function(bookId) {
    //return axios.put("/api/buy/" + id, userData;
    console.log(bookId + "  buyBookId")
    console.log("loggedUserId   " + localStorage.loggedUserId) 
    return axios.put("/api/buy/" + bookId, {
      buyer: localStorage.loggedUserId,
      initTransaction: true
    })
  },
  // Gets the books with initTransactiion : true
  getInTransactionBooks: function() {
    return axios.get("/api/buy/");
  },
  // Gets the books with initTransactiion : true
  getMyInTransactionBooks: function(id) {
    return axios.get("/api/buy/userinprogress" + id);
  }
  
};
