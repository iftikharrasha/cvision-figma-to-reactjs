import React from 'react';
import ccam from '../../Images/ccam.webp';

const Hero = () => {
    return (
        <>
            <section className="hero" id="hero">
                <div className="container">
                    <div className="hero-contents">
                        <h1 data-aos="fade" data-aos-delay="500" data-aos-duration="1000" data-aos-once="true">Your <span>Safety</span></h1>
                        <h2 data-aos="fade" data-aos-delay="700" data-aos-duration="1000" data-aos-once="true">Is under our <span>supervision</span></h2>
                        <p data-aos="fade" data-aos-delay="800" data-aos-duration="1000" data-aos-once="true">
                            Meet innovative CVISION solution designed to create a semi-autonomous ride experience, increase road safety and reduce accidents.It is not just a camera with artificial intelligence but a multifunctional assistant that allows everyone to monitor traffic and the in-cabin situation in real-time to predict any changes and potential risks.
                            <br /><br />
                            Moreover, software and cloud technologies implemented allow you to create your own driver profile with fleet management dashboard capabilities for commercial fleets. Try extended driver behavior & road reports via the Mobile app to get comprehensive vehicle monitoring & analysis.
                        </p>
                        <div className="hero-btn">
                            <a href="#dms" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000" data-aos-once="true"><button>DMS</button></a>
                            <a href="#fleet" data-aos="fade-up" data-aos-delay="1200" data-aos-duration="1000" data-aos-once="true"><button>Fleet dashboard</button></a>
                            <a href="#adas" data-aos="fade-up" data-aos-delay="1300" data-aos-duration="1000" data-aos-once="true"><button>ADAS</button></a>
                        </div>
                        <img src={ccam} alt={ccam} data-aos="fade" data-aos-delay="400" data-aos-duration="1000" data-aos-once="true"/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;