import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    items: [],
    title: "",
    category: "",
    subcategory: "",
    price: "",
    condition: "",
    seller: "",
    buyer: "",
    description: "",
    active: "",
    date: "",
    upc: "",
    initTransaction: ""
  };

  componentDidMount() {

    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ items: res.data, title: "", category: "", subcategory: "", price: "", condition: "", seller: "", buyer: "", description: ""})
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.price) {
      API.saveBook({
        title: this.state.title,
        category: this.state.category,
        subcategory: this.state.subcategory,
        price: this.state.price,
        condition: this.state.condition,
        seller: this.state.seller,
        buyer: this.state.buyer,
        description: this.state.description
      },
      
      )
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add To Inventory</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.condition}
                onChange={this.handleInputChange}
                name="condition"
                placeholder="condition (required)"
              />
              <Input
                value={this.state.category}
                onChange={this.handleInputChange}
                name="category"
                placeholder="category (required)"
              />
              <Input
                value={this.state.subcategory}
                onChange={this.handleInputChange}
                name="subcategory"
                placeholder="subcategory (required)"
              />
              <Input
                value={this.state.price}
                onChange={this.handleInputChange}
                name="price"
                placeholder="Price (required)"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="description (Optional)"
              />
              <FormBtn
                disabled={!(this.state.price && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Add Item
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Items In Inventory</h1>
            </Jumbotron>
              {this.state.items.length ? (
                <List>
                  {this.state.items.map(book => (
                    <ListItem key={book._id}>
                      <Link to={"/books/" + book._id}>
                        <strong>
                          {book.title} ${book.price} {book.condition} {book.category} {book.subcategory}
                        </strong>
                        <pre>{JSON.stringify(book, null, 2)}</pre>
                      </Link>
                      <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                    </ListItem>
                  ))}
                </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
