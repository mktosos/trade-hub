import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import decode from 'jwt-decode';
import UserFromToken from "../components/UserFromToken";
import SearchForItems from "../components/SearchForItems";



class Books extends Component {
  state = {
    items: [],
    title: "",
    category: "",
    subcategory: "",
    price: "",
    condition: "",
    buyer: "",
    description: "",
    active: "",
    date: "",
    upc: "",
    initTransaction: "",
    token: "",
    seller: "",
    
  };

  componentDidMount() {
   
    try{
      const token = localStorage.getItem('current_user_token');
      const loggedUser = decode(token).userName;
      const loggedUserId = decode(token).id;
      localStorage.setItem('loggedUserId', loggedUserId);
      // console.log(loggedUserId + "      pages/Books.js"); 
      // console.log(loggedUser + "      pages/Books.js");
      this.loadBooks(loggedUserId);
    }catch (error) {
      // ...
    }
   
  }
  
  loadBooks = (loggedUserId) => {
    // console.log(decode(localStorage.getItem('current_user_token')).id + " from inside loadBooks")
    API.getUserBooks(loggedUserId)
      .then(res =>
        this.setState({ items: res.data, title: "", category: "", subcategory: "", price: "", condition: "", seller: "", buyer: "", description: ""})
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks(decode(localStorage.getItem('current_user_token')).id))
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
        buyer: this.state.buyer,
        description: this.state.description,
        seller: localStorage.loggedUserId
      })
        .then(res => this.loadBooks())
        .then (window.location.reload())
        .catch(err => console.log(err));
    }
  };
  
  render() {
    return (
      <Container fluid>
        <Row>
          
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h4>Your inventory <span><UserFromToken/></span></h4>
            </Jumbotron>
              {this.state.items.length ? (
                <List>
                  {this.state.items.map(book => (
                    <ListItem key={book._id}>
                      <Link to={"/books/" + book._id}>
                        <strong>
                          {book.title} ${book.price} {book.condition} {book.category} {book.subcategory}
                        </strong>
                        {/* <pre>{JSON.stringify(book, null, 2)}</pre> */}
                      </Link>
                      <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                    </ListItem>
                  ))}
                </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
         
          <Col size="md-6 sm-12">
            <SearchForItems/>    
          </Col>
        </Row>
        <Row>
        <Col size="md-6">
            <Jumbotron>
              <h4>List an item </h4>
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
        </Row>
        
      </Container>
    );
  }
}

export default Books;
