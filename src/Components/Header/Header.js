import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.webp';

const Header = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollHeight = window.scrollY;
            setScroll(scrollHeight > 50);
        })
    }, []);

    const activeToggle = e => {
        document.getElementById('header').classList.toggle('open');
        e.preventDefault();
    }

    return (
        <>
            <header className={scroll ? "header fixed-header" : "header"} id="header">
                <div className="container">
                    <div className="header-contents">
                        <div className="logo" data-aos-delay="100" data-aos-duration="1000" data-aos-once="true">
                            <Link to="/home" data-aos="flip-up">
                                <img src={logo} alt={logo}/>
                            </Link>
                        </div>

                        <nav className="nav-right">       
                            <ul>
                                <li data-aos="flip-up" data-aos-delay="100" data-aos-duration="1000" data-aos-once="true"><a href="#about">About Us</a></li>
                                <li data-aos="flip-up" data-aos-delay="250" data-aos-duration="500" data-aos-once="true"><a href="#product">Product</a></li>
                                <li data-aos="flip-up" data-aos-delay="400" data-aos-duration="500" data-aos-once="true"><a href="#team">Team</a></li>
                                <li data-aos="flip-up" data-aos-delay="550" data-aos-duration="500" data-aos-once="true"><a href="#sponsors">Sponsors</a></li>
                                <li data-aos="flip-up" data-aos-delay="700" data-aos-duration="500" data-aos-once="true"><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>

                        <div className="mobile-design desktop-hidden">
                            <a href="#" className="nav-toggle" onClick={activeToggle}>
                                <span className="top"></span>
                                <span className="mid"></span>
                                <span className="bot"></span>
                            </a>

                            <div className="nav-full">
                                <ul>
                                    <li><a href="#about">About Us</a></li>
                                    <li><a href="#product">Product</a></li>
                                    <li><a href="#team">Team</a></li>
                                    <li><a href="#sponsors">Sponsors</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;