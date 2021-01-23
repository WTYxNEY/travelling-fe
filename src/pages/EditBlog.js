import React, { useEffect, useRef, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import BlogService from '../Services/BlogService';
import FileBase from 'react-file-base64'
import { AuthContext } from '../Context/AuthContext';

function EditBlog(props) {
    let timerID = useRef(null);
    const { blogId } = useParams()
    const [blog, setBlog] = useState()
    const blogDetail = useSelector(state => state.blog.blogs.find((blog) => blog._id === blogId))
    const dispatch = useDispatch();
    const { user } = useContext(AuthContext);

    const countryList = [
        {
            id: 3,
            country: "Select Country"
        },
        {
            id: 1,
            country: "Thailand"
        },
        {
            id: 2,
            country: "Foreign Country"
        }
    ]

    useEffect(() => {
        dispatch(BlogService.getBlog(blogId));
        if(blogDetail) setBlog(blogDetail)
    }, [dispatch]);

    useEffect(() => {
        return () => {
            clearTimeout(timerID);
        }
    }, []);

    const handleOnchange = (e) => {
        setBlog({ ...blog, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(BlogService.editBlog(blog, blogId))
        clear()
        timerID = setTimeout(() => {
            props.history.push(`/blogs/${user._id}`);
        }, 2000)

    }

    const clear = () => {
        setBlog({
            title: "",
            content: "",
            selectedFile: "",
            country: null
        })
    }

    return (
        <>
            {!blog ? "Loading" : (
                <div className="create">
                    <div className="create-box">
                        <div className="create-box-content">

                            <div className="create-box-content-item">
                                <h3>Create A New Blog</h3>

                                <input type="text" id="Title" value={blog.title} name="title" placeholder="Enter Title..." required onChange={handleOnchange} />

                                <textarea type="text" id="content" value={blog.content} name="content" placeholder="Enter Content..." required onChange={handleOnchange} />

                                <FileBase type="file" id="selectedFile" name="selectedFile" multiple={false}
                                    onDone={({ base64 }) => setBlog({ ...blog, selectedFile: base64 })}
                                />

                                <select value={blog ? blog.country : "country"} name="country" id="country" onChange={handleOnchange}>
                                    {countryList.map((ct) => {
                                        return (
                                            <>
                                                {ct.id === 3 ? <option key={ct.id} value={ct.id} value={ct.country} disabled selected>{ct.country}</option>
                                                    :
                                                    <option key={ct.id} value={ct.id} value={ct.country}>{ct.country}</option>
                                                }

                                            </>
                                        )
                                    })}

                                </select>


                                <div className="create-box-content-item-btn">
                                    <button name="save" onClick={handleSubmit}>Save</button>
                                    <button name="clear" onClick={() => clear()}>Clear</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default EditBlog
