import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "./App.css"
import AuthApi from './utils/AuthApi'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import AllBlogs from './pages/AllBlogs'
import Blog from './pages/Blog'
import About from './pages/About'
import CreateBlog from './pages/CreateBlog'
import BlogDetail from './pages/BlogDetail'
import EditBlog from './pages/EditBlog'
import Admin from './pages/Admin'
import Navbar from './Components/Navbar'
import UnPrivateRoute from './hocs/UnPrivateRoute'
import PrivateRoute from './hocs/PrivateRoute'

import { AuthContext } from './Context/AuthContext';

function App() {

  return (
    <div className="App">

      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/allblogs/:country" component={AllBlogs} />
        <Route path="/blogdetail/:blogId" component={BlogDetail} />

        {/* Public */}
        <UnPrivateRoute path="/login" component={SignIn} />
        <UnPrivateRoute path="/register" component={SignUp} />


        {/* Private */}
        {/* blogs/userId */}
        <PrivateRoute path={`/blogs/:userId`} roles={["user", "admin"]} component={Blog} />
        <PrivateRoute path="/createblog" roles={["user", "admin"]} component={CreateBlog} />
        <PrivateRoute path={`/edit/:userId/:blogId`} roles={["user", "admin"]} component={EditBlog} />
        <PrivateRoute path="/admin" roles={["admin"]} component={Admin} />
        <PrivateRoute path="/about" roles={["user", "admin"]} component={About} />
      </Router >
    </div >

  );
}

export default App;
