import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import formFields from './formFields';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import _ from 'lodash';
import * as actions from '../../actions';

class ClassForm extends Component {
    renderFields() {
        return _.map(formFields, ({ label, name, Component, type, format }) => {
            return (
                <Field 
                    key={name} 
                    label={label} 
                    name={name} 
                    component={Component} 
                    type={type} 
                    format={format}
                />
            )
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(() => {this.props.newClass(this.props.classForm.values, this.props.history)})}>
                    {this.renderFields()}
                    <Link to="/surveys" className="btn waves-effect waves-light left red">
                        Cancel
                    </Link>
                    <button type="submit" className="btn waves-effect waves-light right">
                        Create 
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};

    _.each(formFields, ({ name, noValueError }) => {
        if (!values[name]) {
            errors[name] = noValueError;
        }
    });

    return errors;
}

const WrappedClassForm = reduxForm({
    validate,
    form: "classForm",
    destroyOnUnmount: false
})(ClassForm);

const mapStateToProps = (props) => {
    return{
        classForm: props.form.classForm
    }
}

export default connect(mapStateToProps, actions)(WrappedClassForm);