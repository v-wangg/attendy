import { UPDATE_CLASS } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case UPDATE_CLASS:
            return action.payload;
        default:
            return state;
    }
}