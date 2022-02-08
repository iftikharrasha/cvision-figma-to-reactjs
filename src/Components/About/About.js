import React from 'react';
import face from '../../Images/face.webp';

const About = () => {
    return (
        <>
            <section className="about" id="about">
                <div className="container">
                    <div className="about-contents">
                        <div className="about-right">
                            <h6>About Us</h6>
                            <h2>Risk-Reducing Solution <br /> For Any Vehicle</h2>
                            <p>After examining the vast amount of data and research on car accidents that occur due to the inability of the driver to assess the traffic situation in time and respond to changes, we have concluded that most of them could be prevented. Fatigue and distractions significantly impact road safety, and a few seconds of delay can cost someone's life. That's why we decided to create an innovative solution that will not only help minimize traffic accidents but will also be easy to install, and operate, inexpensive and really effective.
                                <br /><br />
                                CVISION ADAS/DMS DVR appeared with several cameras providing a comprehensive safety solution for the drivers and a precise driving evaluation system.
                            </p>
                            <button>Learn More</button>
                        </div>
                        <div className="about-left">
                            <img src={face} alt={face} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;