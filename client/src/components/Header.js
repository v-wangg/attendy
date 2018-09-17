import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
    renderNavItems() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href="/api/auth/google">Login with Google</a>
                    </li>
                )
            default:
                return (
                    <li>
                        <a href="/api/auth/sign-out">Sign Out</a>
                    </li>
                )
        } 
    }

    render() {
        return(
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo"> Attendy </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.renderNavItems()}
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        auth
    }
}

export default connect(mapStateToProps)(Header);