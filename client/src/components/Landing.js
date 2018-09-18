import React, { Component } from 'react';
import { connect } from 'react-redux';

class Landing extends Component {
    renderMessage() {
        switch (this.props.auth) {
            case null: 
                return <div> Welcome! Please sign in with Google at the top right corner </div>
            case false:
                return <div> Welcome! Please sign in with Google at the top right corner </div>
            default:
                return <div> Welcome {this.props.auth.name} ! </div>
        }
    }

    render() {
        return (
            this.renderMessage()
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        auth
    }
}

export default connect(mapStateToProps)(Landing)