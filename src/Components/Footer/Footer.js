import React from 'react';
import footLogo from '../../Images/foot-logo.webp';
import facebookXs from '../../Images/facebook-xs.svg';
import instagramXs from '../../Images/instagram-xs.svg';
import linkedinXs from '../../Images/linkedin-xs.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <section className="footer" id="footer">
                <div className="footer-contents">
                    <div className="footer-top">
                        <div className="container">
                            <img src={footLogo} alt={footLogo} />
                            <div className="footer-links">
                                <ul>
                                    <li data-aos="flip-up" data-aos-delay="300" data-aos-duration="1000"><a href="#about">About Us</a></li>
                                    <li data-aos="flip-up" data-aos-delay="500" data-aos-duration="1000"><a href="#product">Product</a></li>
                                    <li data-aos="flip-up" data-aos-delay="700" data-aos-duration="1000"><a href="#team">Team</a></li>
                                    <li data-aos="flip-up" data-aos-delay="900" data-aos-duration="1000"><a href="#sponsors">Sponsored</a></li>
                                    <li data-aos="flip-up" data-aos-delay="1100" data-aos-duration="1000"> <Link to="/privacy">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-below">
                        <div className="container">
                            <div className="below-items">
                                <div className="footer-left">
                                    <h3>© 2021 CVISION. All rights reserved</h3>
                                </div>
                                <div className="footer-right">
                                    <div className="social-icons">
                                        <ul>
                                            <li><a href="#" target="_blank" rel="noopener noreferrer"><img src={facebookXs} alt={facebookXs}/></a></li>
                                            <li><a href="#" target="_blank" rel="noopener noreferrer"><img src={instagramXs} alt={instagramXs}/></a></li>
                                            <li><a href="#" target="_blank" rel="noopener noreferrer"><img src={linkedinXs} alt={linkedinXs}/></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;