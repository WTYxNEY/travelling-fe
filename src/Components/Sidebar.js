import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const Sidebars = [
    {
        title: 'Home',
        path: '/',
        cName: 'nav-text'
    },
    {
        title: 'All Blogs',
        path: '/blogs',
        cName: 'nav-text'
    },
    {
        title: 'My Blog',
        path: '/blog/:id',
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        cName: 'nav-text'
    },
]
