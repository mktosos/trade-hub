const db = require("../models");
const jwt = require("jsonwebtoken")

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    const token =req.header("Authorization");
    let bearer = "";
    if (token) {
      bearer=token.replace("bearer ","");
    }else{
      return (res.status(403).json({
        error: "authorization required"
      }))
    }
    console.log(bearer);
    jwt.verify(bearer,"process.env.SECRETKEY", function(err, decoded){
      if(err){
        return (res.status(404).json({
          error: "authorization required"
        }))
      }
      console.log(decoded.id);
      console.log(decoded.id);
    })
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
