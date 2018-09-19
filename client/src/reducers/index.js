import {combineReducers} from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './auth-reducer';
import classesReducer from './classes-reducer';
import currentClassReducer from './current-class-reducer';

export default combineReducers({
    auth: authReducer,
    classes: classesReducer,
    form: reduxForm,
    currentClass: currentClassReducer
})