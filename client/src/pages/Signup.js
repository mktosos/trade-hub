import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

class Signup extends Component {
  state = {
    active: true,
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
    address: {},
    offers: [],
    inTransaction: [],
    dhistory: [],
    feedback: [],
    groupsAllowedIn: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.userName && this.state.password) {
      API.saveUser({
        userName: this.state.userName,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        password: this.state.password
      })
        
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Create an Account</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.userName}
                onChange={this.handleInputChange}
                name="userName"
                placeholder="userName (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="password(required)"
              />
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="firstName (required)"
              />
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="lastName"
                placeholder="lastName (required)"
              />
              
              <FormBtn
                disabled={!(this.state.password && this.state.userName)}
                onClick={this.handleFormSubmit}
              >
                Sign Up
              </FormBtn>
            </form>
          </Col>
          
        </Row>
      </Container>
    );
  }
}

export default Signup;
