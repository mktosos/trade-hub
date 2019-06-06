const db = require("../models");
const jwt = require("jsonwebtoken")

// Defining methods for the buyController
module.exports = {
 
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      // .then(dbModel => res.json(dbModel))
      .then(console.log(req.body.listingId +"  from update"))
      .catch(err => res.status(422).json(err));
  },
  
  buy: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, {buyer: loggedUserId})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
