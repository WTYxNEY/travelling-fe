import { CREATE, FETCH_ALL, FETCH_BLOG } from '../constants/actionTypes'

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return action.payload
        default:
            return state;
    }
}