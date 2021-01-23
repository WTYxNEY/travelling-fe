import React, { useEffect,useContext } from 'react'
import { Link } from 'react-router-dom'
import { RiFacebookCircleFill, RiInstagramLine, RiPhoneFill, RiMailLine } from 'react-icons/ri'
import './css/Home.css'
import CardItem from '../Components/CardItem'
import { useDispatch, useSelector } from 'react-redux'
import { AuthContext } from '../Context/AuthContext';

import BlogService from '../Services/BlogService';

export default function Home() {
    const blogs = useSelector(state => state.blogs)
    const dispatch = useDispatch();
    const { user, isAuthenticated } = useContext(AuthContext);
    useEffect(() => {
        dispatch(BlogService.getBlogs());
    }, []);

    return (
        <div>
            {!blogs ? "Loading..." : (

                <div className="home-container">
                    {/* Home Heading */}
                    <header className="home-heading">
                        <p>Travelling Blog </p>
                    </header>


                    {/* Home Card Heading */}
                    <div className="container">

                        <div className="home-content-card-heading">
                            <h2>Thailand</h2>
                        </div>

                        {/* Home Card Content */}
                        <div className="home-content-cards">
                            <div className="home-content-cards-grid">

                                {
                                    blogs.filter((blogs) => blogs.country === "Thailand").length === 0 ? "We have no any blog about Thailand" :
                                        blogs.filter((blogs) => blogs.country === "Thailand").slice(0, 3).map((blog) => {
                                            return <div className="home-content-card-item">
                                                <CardItem key={blog._id} blog={blog} />
                                            </div>
                                        })
                                }

                            </div>
                        </div>

                        {/* Home All Button */}
                        {
                            blogs.filter((blogs) => blogs.country === "Thailand").length === 0 ? null :
                                <div className="home-content-viewall">
                                    <Link to='/allblogs/th'>
                                        <button type="button" className="btn btn-outline-primary">View All</button>
                                    </Link>
                                </div>
                        }


                        <div className="home-content-card-heading">
                            <h2>Foreign country</h2>
                        </div>

                        {/* Home Card Content */}
                        <div className="home-content-cards">
                            <div className="home-content-cards-grid">

                                {
                                    blogs.filter((blogs) => blogs.country !== "Thailand").length === 0 ? "We have no any blog about Foreign country" :
                                        blogs.filter((blogs) => blogs.country !== "Thailand").slice(0, 3).map((blog) => {
                                            return <div className="home-content-card-item">
                                                <CardItem key={blog._id} blog={blog} />
                                            </div>
                                        })
                                }

                            </div>
                        </div>

                    </div>

                    {/* Home All Button */}
                    {
                        blogs.filter((blogs) => blogs.country !== "Thailand").length === 0 ? null :
                            <div className="home-content-viewall">
                                <Link to='/allblogs/fc'>
                                    <button type="button" className="btn btn-outline-primary">View All</button>
                                </Link>
                            </div>
                    }


                    <footer>
                        <div className="footer-grid">

                            <div className="footer-item">
                                <h4>Contact Me</h4>
                                <div className="footer-item-detail">
                                    <p> <i><RiFacebookCircleFill /></i>Watunyu Panmun</p>
                                    <p> <i><RiInstagramLine /></i>Watunyu Panmun</p>
                                    <p><i><RiMailLine /></i>watunyu101041@gmail.com</p>
                                    <p><i><RiPhoneFill /></i>098-528-3239</p>
                                </div>
                            </div>

                            <div className="footer-item">
                                <h4>About Me</h4>
                                <p>สวัสดีครับ ผมชื่อนายวทัญญู ปานหมั่น ชื่อเล่น เนย์ เว็บไซต์นี้จัดทำขึ้นเพื่อเป็นการฝึกทำ frontend developer และ backend developer
                                ในขณะที่ผมกำลังศึกษาอยู่ชั้นปีที่ 4 คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี และเป็นผลงานในการทำเสนอแก่ผู้ที่ได้เข้ามารับชม
                                ขอบคุณสำหรับท่านที่เสียสละเวลาอันมีค่าเข้ามารับชมเว็บไซต์นี้ครับ
</p>
                            </div>

                            <div className="footer-item">
                                <h4>Address</h4>
ที่อยู่ปัจจุบัน
<p>237/113 ซอยเอกชัย26 ถนนเอกชัย ตำบลมหาชัย อำเภอเมืองสมุทรสาคร จังหวัดสมุทรสาคร 74000</p>
                            </div>

                        </div>
                    </footer>
                    <div class="copyright">
                        <div class="copyright-grid">
                            <div>
                                <p>Copyright © 2020 Watunyu Panmun - All Rights Reserved</p>
                            </div>
                            <div>
                                <p>Travelling blog by Watunyu Panmun</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </div>
    )
}




