import React from 'react';
import Reflux from 'reflux';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

import './BaseLayout.css';

import LoggedUserStore from '../reflux/stores/LoggedUser';

class BaseLayout extends Reflux.Component {
    constructor() {
        super();

        this.store = LoggedUserStore;
    }

    render_logged = () => (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Navbar.Text>
                    Logged in as: {this.state.username}
                </Navbar.Text>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/logout"}>Logout</Link>
            </li>
        </ul>
    )

    render_not_logged = () => (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to={"/login"}>Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/signup"}>Sign up</Link>
            </li>
        </ul>
    )

    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to={"/"}>Wasteless</Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            {this.state.logged ? this.render_logged() : this.render_not_logged()}
                        </div>
                    </div>
                </nav>

                {this.props.children}
            </div>
        );
    }
}

export default BaseLayout;
