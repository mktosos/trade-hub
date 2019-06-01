import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Logout() {
    localStorage.clear();
    window.location.href = '/';
  return (
    <Logout/> 
  );
}

export default Logout;
