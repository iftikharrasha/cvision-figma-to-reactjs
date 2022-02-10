import React from 'react';
import footLogo from '../../Images/foot-logo.webp';
import instagramXs from '../../Images/instagram-xs.svg';
import dribbbleXs from '../../Images/dribbble-xs.svg';
import twitterXs from '../../Images/twitter-xs.svg';
import youtubeXs from '../../Images/youtube-xs.svg';

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
                                    <li data-aos="flip-up" data-aos-delay="1100" data-aos-duration="1000"><a href="#privacy">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-below">
                        <div className="container">
                            <div className="below-items">
                                <div className="footer-left">
                                    <h3 data-aos="fade-zoom-in" data-aos-easing="fade-up" data-aos-delay="200" data-aos-duration="1000">© 2021 CVISION. All rights reserved</h3>
                                </div>
                                <div className="footer-right">
                                    <div className="social-icons">
                                        <ul>
                                            <li data-aos="fade-zoom-in" data-aos-easing="fade-up" data-aos-delay="200" data-aos-duration="1000"><a href="#" target="_blank" rel="noopener noreferrer"><img src={dribbbleXs} alt={dribbbleXs}/></a></li>
                                            <li data-aos="fade-zoom-in" data-aos-easing="fade-up" data-aos-delay="400" data-aos-duration="1000"><a href="#" target="_blank" rel="noopener noreferrer"><img src={instagramXs} alt={instagramXs}/></a></li>
                                            <li data-aos="fade-zoom-in" data-aos-easing="fade-up" data-aos-delay="600" data-aos-duration="1000"><a href="#" target="_blank" rel="noopener noreferrer"><img src={twitterXs} alt={twitterXs}/></a></li>
                                            <li data-aos="fade-zoom-in" data-aos-easing="fade-up" data-aos-delay="800" data-aos-duration="1000"><a href="#" target="_blank" rel="noopener noreferrer"><img src={youtubeXs} alt={youtubeXs}/></a></li>
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