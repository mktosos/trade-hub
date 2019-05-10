import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.book.title} ${this.state.book.price} {this.state.book.category} {this.state.book.subcategory} {this.state.book.condition}
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
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
            <Link to="/">← Back to Inventory</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
console.log("k")

export default Detail;
