import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ClassesList from './ClassesList';

export default class Dashboard extends Component {
    render() {
        return(
            <div>
                <ClassesList />
                <div className="fixed-action-btn">
                    <Link to="/classes/new" className="btn-floating btn-large red">
                        <i className="large material-icons">add</i>
                    </Link>
                </div>
            </div>
        )
    }
}



