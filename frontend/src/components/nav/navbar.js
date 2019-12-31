import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from './ideaStorm2.png';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <Link to={'/mindmaps'}>Mind Maps</Link>
                    <Link to={'/new_mindmap'}>Create Mind Map</Link>
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div className="signup-login">
                    <Link className="login" to={'/login'}>Login</Link>
                    <Link className="signup" to={'/signup'}>Signup</Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="nav-bar">
                <button className= "logo-button">
                    <img src={logo} className="App-logo" alt="logo" />
                </button>
                <section className="session-link-container">
                    {this.getLinks()}
                </section>
            </div>
        );
    }
}

export default NavBar;