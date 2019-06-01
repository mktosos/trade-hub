import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../components/container/Login.css";
import API from '../utils/API';
import { createBrowserHistory } from 'history';
// import {Link} from 'react-router-dom';
const history = createBrowserHistory();
//import AuthService from './../components/AuthService';
 
// import RandomHomeComponent from '../components/RandomHomeComponent';

class Login extends Component {
  state = {
    userName: '',
    password: '',
  };

  // constructor() {
  //   super();
  //   this.Auth = new AuthService();
  // }

  

  onSubmit = (event) => {
    event.preventDefault();
    API.login(this.state)
      .then(res => {
        console.log(res.data);
        localStorage.setItem('current_user_token', res.data.token);
        history.push('/user');
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  onChange = key => e => this.setState({ [key]: e.target.value });

  render() {
    return (
      <div className="Login">
      
        <form onSubmit={this.onSubmit}>
          <FormGroup controlId="userName" size="large">
            <FormLabel>User name</FormLabel>
            <FormControl
              autoFocus
              type="string"
              value={this.state.userName}
              onChange={this.onChange("userName")}
            />
          </FormGroup>
          <FormGroup controlId="password" size="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.onChange("password")}
              type="password"
            />
          </FormGroup>
          <Button
            //onClick={this.onSubmit}
            disabled={!Boolean(this.state.userName && this.state.password)}
            block
            size="large"
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

export default Login;