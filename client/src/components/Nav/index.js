import React, { Component } from "react";
import { Link } from 'react-router-dom';
import UserFromToken from "../UserFromToken";

class Navbar extends Component {
    
    showNavigation = () => {
    const token = window.localStorage.getItem('current_user_token');
         function logout() {
            localStorage.clear();
            window.location.href = '/';
        }
        if (token) {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <UserFromToken/>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/user"><h6>PROFILE</h6></Link>
                    </li>
                    <li className="nav-item">
                        {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                        <a className="nav-link" href="/" onClick={() => logout()}><h6>logout</h6></a>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Signup</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                </ul>
            );
        }
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/"><h4>Trade Hub</h4></Link>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                        </ul>
                        {this.showNavigation()}
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;