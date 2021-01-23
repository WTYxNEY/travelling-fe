import React, { useContext, useEffect, useRef } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';
import "./css/CardItem.css"
import { useDispatch } from 'react-redux'
import BlogService from '../Services/BlogService';
import ConfirmationAlert from '../Components/ConfirmationAlert'

function CardItem({ blog, myBlog }) {
    let timerID = useRef(null);
    const { user } = useContext(AuthContext);
    const formatDate = dayjs(blog.createDate).format('DD/MM/YYYY')
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            clearTimeout(timerID);
        }
    }, []);

    const handleDelete = (e) => {
        e.preventDefault();
        timerID = setTimeout(() => {
            ConfirmationAlert()
            dispatch(BlogService.deleteBlog(blog._id));
        }, 2000)
    }

    return (
        <>
            {blog && (
                <Card>
                    <CardImg top width="100%" src={blog.selectedFile}
                        alt="Card image" />
                    <div>
                        <CardBody >
                            <CardTitle tag="h5">{blog.title}</CardTitle>
                            <CardText className="mb-2 text-muted">{blog.content.substring(0, 150) + "..."}</CardText>
                            <CardText>{blog.country}</CardText>
                            <CardText>{formatDate}</CardText>
                            <div className="blog-button">
                                <Link to={`/blogdetail/${blog._id}`} >
                                    <Button name="detail">See Detail</Button>
                                </Link>
                                {myBlog ? (
                                    <>
                                        <Link to={`/edit/${user._id}/${blog._id}`} >
                                            <Button name="edit">Edit</Button>
                                        </Link>
                                        <Link>
                                            <Button name="delete" onClick={handleDelete}>Delete</Button>
                                        </Link>
                                    </>
                                ) : null}

                            </div>
                        </CardBody>

                    </div>
                </Card>

            )}
        </>
    )
}

export default CardItem
