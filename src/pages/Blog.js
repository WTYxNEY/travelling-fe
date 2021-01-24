import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './css/Blog.css'
import CardItem from '../Components/CardItem'
import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress } from '@material-ui/core'
import BlogService from '../Services/BlogService';

export default function Blog() {
    const [myBlog, setMyBlog] = useState(false)
    const blog = useSelector(state => state.blog) //blog reducer
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(BlogService.getBlog());
    }, [dispatch]);

    console.log(blog)

    return (
        <>
            {!blog ? "Loading..." : (
                !blog.blogs ?
                    <div className="circular-progresss">
                        <CircularProgress />
                    </div>
                    :
                    <div className="blog-container">

                        {/* Blog Heading */}
                        <header className="blog-heading">
                            <p>My Blog</p>
                        </header>

                        <div className="container">

                            {/* Create Button */}
                            <div className="blog-content-create-btn">
                                <Link to="/createblog">
                                    <button>Create Blog</button>
                                </Link>
                            </div>

                            {/* Blog Card Content */}
                            {blog.blogs.length === 0 ?
                                <div className="no-content">
                                    <p>You have no any content, just create one</p>
                                </div>
                                :
                                < div className="blog-content-cards">
                                    <div className="blog-content-cards-grid">

                                        {blog.blogs.map(blog => {
                                            return (
                                                <div key={blog._id} className="blog-content-card-item">
                                                    <CardItem key={blog._id} blog={blog} myBlog={!myBlog} />
                                                </div>
                                            )
                                        })}

                                    </div>
                                </div>}

                        </div>
                    </div>
            )
            }
        </>
    )
}
