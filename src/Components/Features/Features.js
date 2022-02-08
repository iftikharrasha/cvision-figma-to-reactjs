import React from 'react';
import road from '../../Images/road.webp';
import collision from '../../Images/collision.webp';
import monitoring from '../../Images/monitoring.webp';
import bell from '../../Images/bell.webp';
import focusing from '../../Images/focusing.webp';
import realtime from '../../Images/realtime.webp';

const Features = () => {
    return (
        <>
            <section className="features">
                <div className="container">
                    <div className="features-contents">
                        <div className="single-item">
                            <img src={road} alt={road} />
                            <h2>Detect Road Obstacles</h2>
                            <p>Be prepared for road changes before you will know, see and understand them</p>
                        </div>

                        <div className="single-item">
                            <img src={collision} alt={collision} />
                            <h2>Collision’s Warning</h2>
                            <p>Instant analysis of the current situation and possible risks to prevent accidents</p>
                        </div>

                        <div className="single-item">
                            <img src={monitoring} alt={monitoring} />
                            <h2>In-cabin Monitoring</h2>
                            <p>Real-time analysis of most in-cabin risk indicators to ensure maximum safety of the driver, passengers, and cargo during transportation</p>
                        </div>

                        <div className="single-item">
                            <img src={bell} alt={bell} />
                            <h2>AI Sounds Alerts</h2>
                            <p>CVISION comes with an AI Alerts system, providing a 1ms response to keep excellent ride focusing at different traffic conditions</p>
                        </div>

                        <div className="single-item">
                            <img src={focusing} alt={focusing} />
                            <h2>Keep You Focusing</h2>
                            <p>Absolute focus on driving is the key to safe driving, and a camera with artificial intelligence will be your best assistant</p>
                        </div>

                        <div className="single-item">
                            <img src={realtime} alt={realtime} />
                            <h2>Real-time Reporting</h2>
                            <p>No delays to respond immediately to changes in driver behavior and traffic conditions</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;