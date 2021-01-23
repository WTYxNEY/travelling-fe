import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardItem from '../Components/CardItem'
import { useParams, Link } from 'react-router-dom'
import './css/AllBlog.css'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import BlogService from '../Services/BlogService';

export default function AllBlogs() {
    const blogs = useSelector(state => state.blogs)
    const dispatch = useDispatch();
    const { country } = useParams()
    const [search, setSearch] = useState("")

    useEffect(() => {
        dispatch(BlogService.getBlogs());
    }, []);

    const searchHandle = blogs.filter(blogs => {
        return blogs.title.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div>

            {
                country === 'all' ?
                    
                       ( <div className="container">
                            <Form>
                                <FormGroup>
                                    <Input
                                        type="text"
                                        name="search"
                                        id="search"
                                        value={search}
                                        placeholder="Search for location"
                                        onChange={e => setSearch(e.target.value)}
                                    />
                                </FormGroup>
                            </Form>

                            <div className="blogs-content-card-heading">
                                <h2>All Blogs</h2>
                            </div>

                            {/* Home Card Content */}
                            <div className="blogs-content-cards">
                                <div className="blogs-content-cards-grid">

                                    {
                                        searchHandle.map((blog) => {
                                            return <div className="blogs-content-card-item">
                                                <CardItem key={blog._id} blog={blog} />
                                            </div>
                                        })
                                    }

                                </div>
                            </div>
                            <div className="blogs-content-back">
                                <Link to='/'>
                                    <button type="button" className="btn btn-outline-primary">Back</button>
                                </Link>
                            </div>
                        </div>
                     )
                    : 
                    (country === 'th' ?

                       
                    <div className="container">
                        <Form>
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="search"
                                    id="search"
                                    value={search}
                                    placeholder="Search for location"
                                    onChange={e => setSearch(e.target.value)}
                                />
                            </FormGroup>
                        </Form>

                        <div className="blogs-content-card-heading">
                            <h2>Thailand</h2>
                        </div>

                        {/* Home Card Content */}
                        <div className="blogs-content-cards">
                            <div className="blogs-content-cards-grid">

                                {
                                    searchHandle.filter((blogs) => blogs.country === "Thailand").map((blog) => {
                                        return <div className="blogs-content-card-item">
                                            <CardItem key={blog._id} blog={blog} />
                                        </div>
                                    })
                                }

                            </div>
                        </div>
                        <div className="blogs-content-back">
                            <Link to='/'>
                                <button type="button" className="btn btn-outline-primary">Back</button>
                            </Link>
                        </div>
                    </div>
                

                :

               
                    <div className="container">
                        <Form>
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="search"
                                    id="search"
                                    value={search}
                                    placeholder="Search for location"
                                    onChange={e => setSearch(e.target.value)}
                                />
                            </FormGroup>
                        </Form>
                        <div className="blogs-content-card-heading">
                            <h2>Foreign country</h2>
                        </div>

                        {/* Home Card Content */}
                        <div className="blogs-content-cards">
                            <div className="blogs-content-cards-grid">

                                {
                                    searchHandle.filter((blogs) => blogs.country !== "Thailand").map((blog) => {
                                        return <div className="blogs-content-card-item">
                                            <CardItem key={blog._id} blog={blog} />
                                        </div>
                                    })
                                }

                            </div>
                        </div>
                        <div className="blogs-content-back">
                            <Link to='/'>
                                <button type="button" className="btn btn-outline-primary">Back</button>
                            </Link>
                        </div>
                    </div>)
                    
                        

            }

        </div>

    )
}
