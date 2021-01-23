import React, { useEffect, useState, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import dayjs from 'dayjs'
import './css/BlogDetail.css'
import BlogService from '../Services/BlogService';
import { Link } from 'react-router-dom'

function BlogDetail() {
    const {  blogId } = useParams()

    const blogDetail = useSelector(state => state.blogDetail)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(BlogService.getBlogDetail(blogId));
    }, []);

    return (
        <>
            {blogDetail && (
                <div className="container">
                    <div className="bd-content">
                        <h1>{blogDetail.title}</h1>
                        <div className="img-detail">
                        <img src={blogDetail.selectedFile} alt="Blog Image" />
                        </div>
                        <h3>&emsp;{blogDetail.content}</h3>
                        <p>Location: {blogDetail.country}</p>
                        <p>Create At: {dayjs(blogDetail.createDate).format('DD/MM/YYYY')}</p>
                        <>
                            <Link to='/'>
                                <div className="bd-content-button">
                                    <button >Back</button>
                                </div>
                            </Link>
                        </>
                    </div>
                </div>
            )}

        </>

    )
}

export default BlogDetail
