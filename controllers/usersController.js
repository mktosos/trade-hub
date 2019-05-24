const db = require("../models");
const bcrypt = require ("bcrypt");
const jwt = require ("jsonwebtoken");
require("dotenv").config();
const env = require('dotenv').config()

// Defining methods for the usersController
module.exports = {
  findAll: function(req, res) {
    console.log(req.header("Authorization"));
    
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  signup: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  login: function(req, res) {
    const { userName, password } = req.body;
    db.User
      .findOne({ userName })
      
      .then(dbModel => {
          bcrypt.compare(password, dbModel.password, function(err, same){
            if (same){
              const token = jwt.sign({
                userName: dbModel.userName,
                id: dbModel._id
              },process.env.SECRET_KEY);
              
              return res.json({ token })
            }else{
              console.log(password, dbModel.password);  
            return res.status(404).json({
              error: "Username or Password error"
            })
          }
        });
      })
        
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const { userName, password, firstName, lastName, email } = req.body;
    bcrypt.genSalt(10, function (err, salt){
      if(err)return next(err);
    })
      bcrypt.hash(password, 10, function (err,hash){
        const user = {
          userName,
          password: hash,
          firstName,
          lastName,
          email
        }
    db.User
    .create(user)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));  
    });
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
