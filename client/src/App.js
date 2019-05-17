import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Album from "./pages/Album";
import ParallaxPage from "./pages/Parallax";



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Album} />
          <Route exact path="/parallax" component={ParallaxPage} />
          <Route exact path="/signup"  component={Signup} />
          <Route exact path="/login"  component={Login} />
          <Route exact path="/user" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
