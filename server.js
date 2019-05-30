const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));  
}

// Add authorization
app.use(function(req, res, next) {
    const token =req.header("Authorization");
    let bearer = "";
    if (token) {
      bearer=token.replace("bearer ","");
    }else{
      return (res.status(403).json({
        error: "authorization required"
      }))
    }
    jwt.verify(bearer,process.env.SECRET_KEY, function(err, decoded){
      if(err){
        return (res.status(404).json({
          error: "authorization required"
        }))
      }
      console.log(decoded);
      console.log(decoded.id);
      console.log(decoded.userName);
      req.user = decoded;
    })
});

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tradeHub");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
