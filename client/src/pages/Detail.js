import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { FormBtn } from "../components/Form";
const userId = localStorage.loggedUserId
class Detail extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    console.log(localStorage.loggedUserId + "   loggedUserId")
    const bookId = this.props.match.params.id
    API.getBookBySeller(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
    console.log(bookId + "   bookId")
    
  }

  loadBooks = (loggedUserId) => {
    // console.log(decode(localStorage.getItem('current_user_token')).id + " from inside loadBooks")
    API.getUserBooks(loggedUserId)
      .then(res =>
        this.setState({ items: res.data, title: "", category: "", subcategory: "", price: "", condition: "", seller: "", buyer: "", description: ""})
      )
      .catch(err => console.log(err));
  };
  
  buyBook = (id) => {
    console.log("buy button hit, id=" + id)
    API.buyBook(id)
      .then(res => this.loadBooks(id))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
              seller = {this.state.book.seller} {this.state.book.title}${this.state.book.price} {this.state.book.category} {this.state.book.subcategory} {this.state.book.condition}
              </h1>
              {/* <pre>{JSON.stringify(this.state.book, null, 2)}</pre> */}
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
              {!(localStorage.loggedUserId === this.state.book.seller || this.state.book.initTransaction)?
              (<FormBtn onClick={() => this.buyBook(this.state.book._id)}>
                BUY
              </FormBtn>)
              :null}
              
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
