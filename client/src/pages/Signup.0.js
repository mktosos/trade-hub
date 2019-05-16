import React, { Component } from 'react';
import "../components/container/Login";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import API from '../utils/API';
// import { Redirect } from 'react-router-dom';

class Signup extends Component {
  state = {
    email: '',
    password: '',
  };

  componentDidMount() {
    const token = localStorage.getItem('current_user_token');

    if (token) {
      API.validateToken(token)
        .then(() => this.props.history.push('/'))
        .catch(() => localStorage.removeItem('current_user_token'));
    }
  }

  onSubmit = () => {
    API.signup(this.state)
      .then(res => localStorage.setItem('current_user_token', res.data.token))
      .catch(err => console.log(err));
  };

  onChange = key => e => this.setState({ [key]: e.target.value });

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" size="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.onChange('email')}
            />
          </FormGroup>
          <FormGroup controlId="password" size="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.onChange('password')}
              type="password"
            />
          </FormGroup>
          <Button
            block
            size="large"
            type="submit"
            onClick={this.onSubmit}
          disabled={!this.state.email || !this.state.password}
          >
            Signup
          </Button>
        </form>
      </div>
    );
  }
}

export default Signup;
