import axios from 'axios';
import { FETCH_USER, FETCH_CLASSES, UPDATE_CLASS } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/auth/current-user');
    dispatch({
        type: FETCH_USER,
        payload: res.data
    });
}

export const fetchClasses = () => async dispatch => {
    const res = await axios.get('/api/classes/user-classes');
    dispatch({
        type: FETCH_CLASSES,
        payload: res.data
    })
}

export const newClass = (values, history) => async dispatch => {
    const res = await axios.post('/api/classes/new', values);
    history.push('/')
    dispatch({
        type: FETCH_CLASSES,
        payload: res.data
    })
}

export const fetchSingleClass = (classID) => async dispatch => {
    const res = await axios.get(`'/api/classes/${classID}`)
    dispatch({
        type: UPDATE_CLASS,
        payload: res.data
    })
}
