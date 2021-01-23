import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Sidebars } from './Sidebar'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

import { AuthContext } from '../Context/AuthContext';
import AuthService from '../Services/AuthService'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(AuthContext);
    const toggle = () => setIsOpen(!isOpen);

    const onClickLogoutHandler = () => {
        AuthService.logout().then(data => {
            if (data.success) {
                setUser(data.user);
                setIsAuthenticated(false);
                window.location.reload();
            }
        });
    }

    const unauthenticatedNavBar = () => {
        return (
            <>
                <NavLink>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li className="nav-item nav-link">
                            Home
                    </li>
                    </Link>
                </NavLink>
                <NavLink>
                    <Link to="/allblogs/all" style={{ textDecoration: 'none' }}>
                        <li className="nav-item nav-link">
                            All
                    </li>
                    </Link>
                </NavLink>
                <NavLink>
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <li className="nav-item nav-link">
                            Login
                    </li>
                    </Link>
                </NavLink>
                <NavLink>
                    <Link to="/register" style={{ textDecoration: 'none' }}>
                        <li className="nav-item nav-link">
                            Register
                    </li>
                    </Link>
                </NavLink>
            </>
        )
    }

    const authenticatedNavBar = () => {
        return (
            <>
                <NavLink>
                    <Link to="/"  style={{textDecoration: 'none'}}>
                        <li className="nav-item nav-link">
                            Home
                    </li>
                    </Link>
                </NavLink>
                <NavLink>
                    <Link to="/allblogs/all" style={{ textDecoration: 'none' }}>
                        <li className="nav-item nav-link">
                            All
                    </li>
                    </Link>
                </NavLink>
                <NavLink>
                    <Link to={`/blogs/${user._id}`} style={{ textDecoration: 'none' }}>
                        <li className="nav-item nav-link">
                            My Blog
                    </li>
                    </Link>
                </NavLink>
                {
                    user.role === "admin" ?
                        <NavLink>
                            <Link to="/admin" style={{ textDecoration: 'none' }}>
                                <li className="nav-item nav-link">
                                    Admin
                        </li>
                            </Link>
                        </NavLink> : null
                }

                <NavLink onClick={onClickLogoutHandler}>
                    <Link style={{ textDecoration: 'none' }}>
                        <li className="nav-item nav-link">
                            Logout
                        </li>
                    </Link>
                </NavLink>
            </>
        )
    }

    return (
        <div className="navbar-container">
            <Navbar color="dark" dark expand="md" style={{ padding: '20px' }}>
                <NavbarBrand href="/" style={{ fontSize: '24px' }} >Travelling Blog</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
                    </Nav>

                    <NavbarText style={{ marginLeft: 'auto' }}> {user.username ? "Hi, " + user.username : null} </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}
