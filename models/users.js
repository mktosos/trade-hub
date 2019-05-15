const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    active : {type : Boolean, default: true},
    userName : {type : String, required: true},
    password : {type : String, required: true},
    firstName : {type : String, required: true},
    lastName : {type : String, required: true},
    address : {
        number :  String,
        secondnNumber : String, 
        street : String,
        city : String,
        state : String, 
        zip : Number
    },
    inventory : [],
    history : [],
    credits : Number,
    rating: [],
    feedback : [],
    groupsAllowedIn : [],
    groupsAdminIn : [],
    books: []
});

const User = mongoose.model("User", userSchema);

module.exports = User;
