import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../components/container/Login.css";
import API from '../utils/API';
import AuthService from './../components/AuthService';
// import {Link} from 'react-router-dom';
// import RandomHomeComponent from '../components/RandomHomeComponent';

class Login extends Component {
  state = {
    userName: '',
    password: '',
  };

  constructor() {
    super();
    this.Auth = new AuthService();
  }

  componentDidMount() {
    console.log("mounted-componentDidMount-Login.js")
    const token = localStorage.getItem('current_user_token');

    if (token) {
      API.validateToken(token)
        .then(() => console.log("token validated"))
        .catch(() => localStorage.removeItem('current_user_token'));
    }
  }

  onSubmit = () => {
    API.login(this.state)
      .then (console.log("onSubmit Login.js fired"))
      //.then(res => localStorage.setItem('current_user_token', res.data.token))
      .catch(err => console.log(err));
  };

  onChange = key => e => this.setState({ [key]: e.target.value });

  render() {
    return (
      <div className="Login">
      
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="userName" size="large">
            <FormLabel>User name?</FormLabel>
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
            onClick={this.onSubmit}
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