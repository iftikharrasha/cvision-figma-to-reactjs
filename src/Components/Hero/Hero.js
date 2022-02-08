import React from 'react';
import ccam from '../../Images/ccam.webp';

const Hero = () => {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero-contents">
                        <h1>Your <span>Safety</span></h1>
                        <h2>Is under our <span>supervision</span></h2>
                        <p>
                            Meet innovative CVISION solution designed to create a semi-autonomous ride experience, increase road safety and reduce accidents.It is not just a camera with artificial intelligence but a multifunctional assistant that allows everyone to monitor traffic and the in-cabin situation in real-time to predict any changes and potential risks.
                            <br /><br />
                            Moreover, software and cloud technologies implemented allow you to create your own driver profile with fleet management dashboard capabilities for commercial fleets. Try extended driver behavior & road reports via the Mobile app to get comprehensive vehicle monitoring & analysis.
                        </p>
                        <div className="hero-btn">
                            <a href="#dms"><button>DMS</button></a>
                            <a href="#fleet"><button>Fleet dashboard</button></a>
                            <a href="#adas"><button>ADAS</button></a>
                        </div>
                        <img src={ccam} alt={ccam} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;