import React, { useState, useRef, useEffect, useContext } from 'react'
import './css/CreateBlog.css'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import BlogService from '../Services/BlogService'
import { AuthContext } from '../Context/AuthContext';
import SuccesSweetAlert from '../Components/SuccesSweetAlert'
import ErrorSweetAlert from '../Components/ErrorSweetAlert'

function CreateBlog(props) {
    const dispatch = useDispatch();
    const { user } = useContext(AuthContext);
    let timerID = useRef(null);
    const [newBlog, setNewBlog] = useState(
        {
            title: "",
            content: "",
            selectedFile: "",
            country: null
        }
    )

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


    const handleOnchange = (e) => {
        setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        return () => {
            clearTimeout(timerID);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newBlog.title !== '' && newBlog.content !== null && newBlog.selectedFile !== '' && newBlog.country !== '') {
            BlogService.createBlog(newBlog)
            clear()
            SuccesSweetAlert("Create success")
            timerID = setTimeout(() => {
                props.history.push(`/blogs/${user._id}`);
                window.location.reload()
            }, 2000)
        } else {
            ErrorSweetAlert("Please Checking Your Input")
        }
    }

    const clear = () => {
        setNewBlog({
            title: "",
            content: "",
            selectedFile: "",
            country: null
        })
    }

    return (
        <>
            <div className="create">
                <div className="create-box">
                    <div className="create-box-content">

                        <div className="create-box-content-item">
                            <h3>Create A New Blog</h3>

                            <input type="text" id="Title" value={newBlog.title} name="title" placeholder="Enter Title..." required onChange={handleOnchange} />

                            <textarea type="text" id="content" value={newBlog.content} name="content" placeholder="Enter Content..." required onChange={handleOnchange} />

                            <FileBase type="file" id="selectedFile" value={newBlog.selectedFile} name="selectedFile" multiple={false}
                                onDone={({ base64 }) => setNewBlog({ ...newBlog, selectedFile: base64 })}
                            />

                            <select value={newBlog ? newBlog.country : "country"} name="country" id="country" value={newBlog.country} onChange={handleOnchange}>
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
        </>
    )
}

export default CreateBlog
