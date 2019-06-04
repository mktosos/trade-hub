
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
//Here is if we have an id_token in localStorage
if(localStorage.getItem("current_user_token")) {
    // then we will attach it to the headers of each request from react application via axios
    //axios.defaults.headers.common['Authorization'] = `Bearer ${"current_user_token"}`;
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('current_user_token');
    // console.log("index.js    " + localStorage.getItem("current_user_token"));
  }
  
ReactDOM.render(<App />, document.getElementById("root"));