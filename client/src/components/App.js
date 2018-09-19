import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions'

import Header from './Header';
import Landing from './Landing';
import ClassForm from './classes/ClassForm';
// import ClassPage from './classes/ClassPage';
  
class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return(
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/classes/new" component={ClassForm} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);

