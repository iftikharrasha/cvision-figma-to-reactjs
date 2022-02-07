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
                        <div className="logo">
                            <Link to="/home">
                                <img src={logo} alt={logo}/>
                            </Link>
                        </div>

                        <nav className="nav-right">       
                            <ul>
                                <li><Link to="/signup">About Us</Link></li>
                                <li><Link to="/product">Product</Link></li>
                                <li><Link to="/team">Team</Link></li>
                                <li><Link to="/login">Sponsors</Link></li>
                                <li><Link to="/login">Contact</Link></li>
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
                                    <li><Link to="/signup">About Us</Link></li>
                                    <li><Link to="/login">Product</Link></li>
                                    <li><Link to="/login">Team</Link></li>
                                    <li><Link to="/login">Sponsors</Link></li>
                                    <li><Link to="/login">Contact</Link></li>
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