    import React, { Component } from "react";
    import DeleteBtn from "../components/DeleteBtn";
    import Jumbotron from "../components/Jumbotron";
    import API from "../utils/API";
    import { Link } from "react-router-dom";
    import { Col, Row, Container } from "../components/Grid";
    import { List, ListItem } from "../components/List";
    
    class SearchForItems extends Component {
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
          this.loadBooks()
       }
      
      loadBooks = () => {
        // console.log(decode(localStorage.getItem('current_user_token')).id + " from inside loadBooks")
        API.getBooks()
          .then(res =>
            this.setState({ items: res.data, title: "", category: "", subcategory: "", price: "", condition: "", seller: "", buyer: "", description: ""})
          )
          .catch(err => console.log(err));
      };
    render() {
        return (
          <Container fluid>
            <Row>
              <Col size="md-12 sm-12">
                <Jumbotron>
                  <h4>Available Now</h4>
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
            </Row>
            <Row>
            <Col size="md-6 sm-12">
                
            </Col>
            </Row>
          </Container>
        );
      }
    }
    
    export default SearchForItems;
        
