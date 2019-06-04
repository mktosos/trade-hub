import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../components/container/Login.css";
import API from '../utils/API';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = decodeURIComponent(atob(base64Url).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(base64);
};

class Login extends Component {
  state = {
    userName: '',
    password: '',
  };

  onSubmit = (event) => {
    event.preventDefault();
    API.login(this.state)
      .then(res => {
        localStorage.setItem('current_user_token', res.data.token);
        localStorage.setItem('token', parseJwt(res.data.token));
        console.log(parseJwt(res.data.token));
        history.push('/user');
        window.location.reload();
        console.log(parseJwt(res.data.token));
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