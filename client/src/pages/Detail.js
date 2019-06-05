import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { FormBtn } from "../components/Form";

class Detail extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    
    console.log("loggedUserId   " + localStorage.loggedUserId)
    API.getBookBySeller(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
    console.log(this.props.match.params.id)  
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
              {this.state.book.seller} ${this.state.book.price} {this.state.book.category} {this.state.book.subcategory} {this.state.book.condition}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h3>Description</h3>
              <p>
                {this.state.book.description}
              </p>
              {!(localStorage.loggedUserId === this.state.book.seller)?(
                // {!("hi" == "hi")?(
              <FormBtn
                disable={(this.state.seller === this.props.match.params.id)}
                onClick={this.handleFormSubmit}
              >
                BUY
              </FormBtn>
              ):null}
              
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
            <Link to="/User">← Back to Inventory</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default Detail;
