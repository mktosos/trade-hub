    import React, { Component } from "react";
    import DeleteBtn from "./DeleteBtn";
    import Jumbotron from "./Jumbotron";
    import API from "../utils/API";
    import { Link } from "react-router-dom";
    import { Col, Row, Container } from "./Grid";
    import { List, ListItem } from "./List";
    import decode from 'jwt-decode';
    class MyItemsInTransaction extends Component {
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
        console.log(decode(localStorage.getItem('current_user_token')).id)
        API.getMyInTransactionBooks(decode(localStorage.getItem('current_user_token')).id)
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
                  <h4>My Transactions in Progress</h4>
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
    
    export default MyItemsInTransaction;
        
