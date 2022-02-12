import React, { useState } from 'react';
import face from '../../Images/face.webp';

const About = () => {
    const [learnMore, isLearnMore] = useState(false);

    return (
        <>
            <section className="about" id="about">
                <div className="container">
                    <div className="about-contents">
                        <div className="about-right">
                            <h6 data-aos="fade-zoom-in" data-aos-delay="400" data-aos-duration="1000">About Us</h6>
                            <h2 data-aos="fade-zoom-in" data-aos-delay="600" data-aos-duration="1000">Risk-Reducing Solution <br /> For Any Vehicle</h2>
                            <p data-aos="fade-zoom-in" data-aos-delay="700" data-aos-duration="1000">After examining the vast amount of data and research on car accidents that occur due to the inability of the driver to assess the traffic situation in time and respond to changes, we have concluded that most of them could be prevented. Fatigue and distractions significantly impact road safety, and a few seconds of delay can cost someone's life. That's why we decided to create an innovative solution that will not only help minimize traffic accidents but will also be easy to install, and operate, inexpensive and really effective.
                                <br /><br />
                                CVISION ADAS/DMS DVR appeared with several cameras providing a comprehensive safety solution for the drivers and a precise driving evaluation system.
                            </p>
                            <a href="#more"><button onClick={() => isLearnMore(true)} data-aos="fade-zoom-in" data-aos-delay="900" data-aos-duration="1000">Learn More</button></a>
                        </div>
                        <div className="about-left">
                            <img src={face} alt={face} data-aos="fade-zoom-in" data-aos-delay="200" data-aos-duration="1000"/>
                        </div>
                    </div>
                    {
                        learnMore && 
                        <div className="about-below" id="more">
                            <div className="below-content">
                                <h2>More Than 'Ordinary DVR'</h2>
                                <p>
                                    It's a big misconception to compare CVS Dual cameras with ordinary modern DVRs with only one camera or offer ADAS with independent connectivity. Of course, some drivers are ready for the complexities of installing third-party systems and hardware. However, most will appreciate one small device, offering many practical and functional options to ensure maximum safety while driving. CVISION offers real-time tracking, analysis, and instant alerts for changes and hazards inside and outside the vehicle.
                                </p>
                                <h6><span>Please note, that CVISION takes care of your privacy!</span> CVS in-cabin camera DOESN'T RECORDS INSIDE. It tracks data needed for DMS correct operation exclusively - open-closed eyes, eating, smoking, using a seat belt, etc. In turn, in-cabin camera doesn't record videos, conversations & driver status during stops(e.g. whether he’s happy, angry or tired). </h6>
                                <p>
                                    We have also taken care of the versatility of the driver behavior monitoring system, making it ideal for individuals, commercial fleets, trucking companies, and public transport. You can install CVISION on any vehicle, take advantage of a personal account for independent drivers, or combine multiple devices into a single fleet management system. The solution provides many possibilities and benefits. You can select and use the most suitable for individual needs and requirements – whether it is a personal driver fatigue monitoring system or a comprehensive emergency vehicle tracking. You can also use them all because there is no such thing as "too much" in road safety.
                                </p>
                                <p>
                                    CVISION continues to develop and improve our latest advances & research in optics, volume optimization & imaging processing technologies, combining them with AI controllers to render far-field & near-field content. We also are planning to use the Augmented Reality (AR) Head-Up Display (HUD) for Advanced driver warning, informing, and outputting valuable vehicle information (like speed, object & pedestrian detection, mapping/route guidance, etc.).
                                </p>
                                <p>
                                    We want to create a seamless, more engaging driver experience using AR/HUD systems with 3D visualizing projects. It will be placed on the driver's line of sight, transferring AI-driven key information in real-time to help minimize drivers' distractions and potentially increase predictability & safety on the road.
                                </p>
                                <a href="#about"><button onClick={() => isLearnMore(false)} data-aos="fade-zoom-in" data-aos-delay="300" data-aos-duration="1000">Close</button></a>
                            </div>
                        </div>
                    }
                </div>
            </section>
        </>
    );
};

export default About;