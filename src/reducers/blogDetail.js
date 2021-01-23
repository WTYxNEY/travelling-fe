import { FETCH_BLOG_DETAIL } from '../constants/actionTypes'

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_BLOG_DETAIL:
            return action.payload;
        default:
            return state;
    }
}