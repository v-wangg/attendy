import { FETCH_CLASSES } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_CLASSES:
            return action.payload;
        default:
            return state;
    }
}