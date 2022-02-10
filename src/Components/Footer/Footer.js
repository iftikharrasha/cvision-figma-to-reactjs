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
                                    <li><a href="#about">About Us</a></li>
                                    <li><a href="#product">Product</a></li>
                                    <li><a href="#team">Team</a></li>
                                    <li><a href="#sponsors">Sponsored</a></li>
                                    <li><a href="#privacy">Privacy Policy</a></li>
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
                                            <li><a href="#" target="_blank" rel="noopener noreferrer"><img src={dribbbleXs} alt={dribbbleXs}/></a></li>
                                            <li><a href="#" target="_blank" rel="noopener noreferrer"><img src={instagramXs} alt={instagramXs}/></a></li>
                                            <li><a href="#" target="_blank" rel="noopener noreferrer"><img src={twitterXs} alt={twitterXs}/></a></li>
                                            <li><a href="#" target="_blank" rel="noopener noreferrer"><img src={youtubeXs} alt={youtubeXs}/></a></li>
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