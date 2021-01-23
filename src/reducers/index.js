import { combineReducers } from 'redux'

import blogs from './blogs'
import blogDetail from './blogDetail'
import blog from './blog'

export default combineReducers({ blogs: blogs, blogDetail: blogDetail, blog: blog });