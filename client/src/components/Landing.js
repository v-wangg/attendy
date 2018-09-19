import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Dashboard from './Dashboard'

class Landing extends Component {
    renderMessage() {
        switch (this.props.auth) {
            case null: 
                return <div style={{textAlign: 'center'}}> Welcome! Please sign in with Google at the top right corner </div>
            case false:
                return <div style={{textAlign: 'center'}}> Welcome! Please sign in with Google at the top right corner </div>
            default:
                return <div style={{textAlign: 'center'}}> Welcome {this.props.auth.name}! Here are your classes <Dashboard /> </div>
        }
    }

    renderAddIcon() {
        if (this.props.auth && this.props.auth.staff) {
            return (
                <div className="fixed-action-btn">
                    <Link to="/classes/new" className="btn-floating btn-large red">
                        <i className="large material-icons">add</i>
                    </Link>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderMessage()}
                {this.renderAddIcon()}
            </div>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        auth
    }
}

export default connect(mapStateToProps)(Landing)