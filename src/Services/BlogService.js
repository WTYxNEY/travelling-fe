import { FETCH_ALL, FETCH_BLOG_DETAIL, FETCH_BLOG, EDIT_BLOG, DELETE_BLOG } from '../constants/actionTypes'

const url = "https://travelling-be.herokuapp.com"
export default {
    getBlogs: () => async (dispatch) => {
        return await fetch(`${url}/user/blogs`)
            .then(response => {
                if (response.status !== 401) {

                    return response.json().then(data => {
                        dispatch({ type: FETCH_ALL, payload: data });
                    });

                }
                else
                    return { message: { msgBody: "UnAuthorized", msgError: true } };
            });
    },
    getBlog: () => async (dispatch) => {
        return await fetch(`${url}/user/blog`)
            .then(response => {
                if (response.status !== 401) {
                    return response.json().then(data => {
                        dispatch({ type: FETCH_BLOG, payload: data });
                    });
                } else {
                    return { message: { msgBody: "UnAuthorized", msgError: true } };
                }
            })
    },
    getBlogDetail: (id) => async (dispatch) => {
        return await fetch(`${url}/user/blogdetail/${id}`)
            .then(response => {
                if (response.status !== 401) {
                    return response.json().then(data => {
                        dispatch({ type: FETCH_BLOG_DETAIL, payload: data });
                    });
                } else {
                    return { message: { msgBody: "UnAuthorized", msgError: true } };
                }
            })
    },
    createBlog: async (newBlog) => {
        return await fetch(`${url}/user/blog`, {
            method: "post",
            body: JSON.stringify(newBlog),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.status !== 401) {
                return response.json().then(data => data);
            }
            else
                return { message: { msgBody: "UnAuthorized" }, msgError: true };
        });
    },
    editBlog: (blog, blogId) => async (dispatch) => {
        return await fetch(`${url}/user/edit/${blogId}`, {
            method: "PATCH",
            body: JSON.stringify(blog),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.status !== 401) {
                return response.json().then(data => {
                    dispatch({ type: EDIT_BLOG, payload: data })
                });
            } else {
                return { message: { msgBody: "UnAuthorized" }, msgError: true };
            }
        })
    },
    deleteBlog: (blogId) => async (dispatch) => {
        return await fetch(`${url}/user/delete/${blogId}`, {
            method: "DELETE"
        }).then(response => {
            if (response.status !== 401) {
                    dispatch({ type: DELETE_BLOG, payload: blogId })
            } else {
                return { message: { msgBody: "UnAuthorized" }, msgError: true };
            }
        })
    }

}