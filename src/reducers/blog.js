import { FETCH_BLOG, EDIT_BLOG, DELETE_BLOG } from '../constants/actionTypes'

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_BLOG:
            return action.payload;
        case EDIT_BLOG:
            return { ...state, blogs: [...state.blogs, action.payload] };
        case DELETE_BLOG:
            return { ...state, blogs: state.blogs.filter((blog) => blog._id !== action.payload)};
        default:
            return state;
    }
}
