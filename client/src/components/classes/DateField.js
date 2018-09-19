import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

const DateField = ({input, label, meta: {touched, error} }) => {
    return (
        <div style={{textAlign: 'center'}}>
            <label> {label} </label>
            <DatePicker
                {...input}
                value = {moment(input.value).format('MM-DD-YYYY')}
                dateForm = "MM/DD/YYYY"
                selected={input.value ? moment(input.value) : null}
            />
            <div className="red-text" style={{textAlign: 'center'}}>
                {touched && error}
            </div>
        </div>
    );
}

export default DateField

  
