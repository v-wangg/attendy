import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class ClassesList extends Component {
    constructor(props) {
        super(props)
        this.renderClasses = this.renderClasses.bind(this);
    }

    componentDidMount() {
        this.props.fetchClasses();
    }

    renderClasses() {
        return _.map(this.props.classes, (classInstance => {
            return (
                <Link to={`/classes/${classInstance._id}`}>
                    <div className="card blue-grey darken-1" key={classInstance._id}>
                        <div className="card-content white-text">
                            <span className="card-title">{classInstance.name}</span>
                            <p>
                                {classInstance._staff}
                            </p>
                            <p className="left">
                                Class code: { classInstance._id }
                            </p>
                            <p className="right">
                                Held on: {
                                    classInstance.dateHeld
                                }
                            </p>
                        </div>
                        <div className="card-action">
                            <a>Present: {classInstance.present}</a>
                            <a>Absent: {classInstance.absent}</a>
                        </div>
                    </div>
                </Link>
            )
        }));
    }

    render() {
        return (
            <div>
                {this.renderClasses()}
            </div>
        )
    }
}

const mapStateToProps = ({ classes }) => {
    return {
        classes
    }
}

export default connect(mapStateToProps, actions)(ClassesList);