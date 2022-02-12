import React from 'react';
import incabin from '../../Images/incabin.webp';
import obstacles from '../../Images/obstacles.webp';
import dashboard from '../../Images/dashboard.webp';

const Product = () => {
    return (
        <>
            <section className="product" id="product">
                <div className="layer-blur blur-top"></div>
                <div className="layer-blur blur-middle"></div>
                <div className="layer-blur blur-bottom"></div>
                <div className="container">
                    <div className="product-contents">
                        <div className="product-top">
                            <h6 data-aos="fade-zoom-in" data-aos-delay="200" data-aos-duration="1000" data-aos-offset="0">About CVISION Product</h6>
                            <h2 data-aos="fade-zoom-in" data-aos-delay="400" data-aos-duration="1000" data-aos-offset="0">CVISION AI Cameras to See Everything</h2>
                            <p data-aos="fade-zoom-in" data-aos-delay="600" data-aos-duration="1000" data-aos-offset="0">Built-in two AI cameras with driver behavior monitoring system & advanced driving assistance system allow every car driver to stay up to date with any changes in traffic conditions and in-cabin situations, providing a real-time report with AI sound alerts.
                            </p>
                        </div>
                        <div className="product-details">
                            <div className="single-item" id="dms">
                                <div className="item-title">
                                    <h5><span>1</span></h5>
                                    <h2>In-Cabin Monitoring</h2>
                                </div>
                                <p>In-side camera in-cabin helps monitor the driver's behavior to increase safety and make sure the driver focuses on the ride. To prevent driver-related accidents, built-in camera-based driver monitoring systems “DMS” track follow risks while driving:</p>
                                <img src={incabin} alt={incabin} />

                                <div className="list-items">
                                    <div className="single-list pr-2-md">
                                        <h4>1. Driver Actions:</h4>
                                        <ul>
                                            <li><span>Smoking</span></li>
                                            <li><span>Eating/drinking</span></li>
                                            <li><span>Using a mobile phone</span></li>
                                            <li><span>Seatbelt</span></li>
                                        </ul>
                                    </div>

                                    <div className="single-list pl-2-md">
                                        <h4>2. Distraction from the road:</h4>
                                        <ul>   
                                            <li><span>Eye-tracking</span></li>
                                            <li><span>Head pose</span></li>
                                            <li><span>Eye gaze & eyelids, pupil dilation</span></li>
                                            <li><span>Mouth openness, face & head tracking</span></li>
                                        </ul>
                                    </div>
                                    
                                    <div className="single-list pl-2-md">
                                        <h4>3. Drowsiness:</h4>
                                        <ul>
                                            <li><span>Yawning</span></li>
                                            <li><span>Closing eyes for a given period</span></li>
                                            <li><span>Slow blinking</span></li>
                                        </ul>
                                    </div>
                                    
                                    <div className="single-list">
                                        <h4>4. Physical condition indicators:</h4>
                                        <ul className="pr-2-md">
                                            <li><span>Body temperature</span></li>
                                            <li><span>Pulse</span></li>
                                            <li><span>Blood oxygen saturation of the driver on a standard scale</span></li>
                                        </ul>
                                    </div>

                                    <div className="single-list pl-2-md">
                                        <h4>5. Driver status:</h4>
                                        <ul>
                                            <li><span>Happy</span></li>
                                            <li><span>Sad</span></li>
                                            <li><span>Angry</span></li>
                                            <li><span>Normal</span></li>
                                            <li><span>Tired</span></li>
                                        </ul>
                                    </div>
                                    
                                    <div className="single-list pl-2-md">
                                        <h4>6. Facial recognition:</h4>
                                        <ul> 
                                            <li><span>Gender</span></li>
                                            <li><span>Age with identity management</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="extra-details">
                                        <p>In addition to driver attention monitoring, CVISION also draws attention to other risks associated with the vehicle condition and proper operation terms:</p>
                                        <ul>
                                            <li>Obstruction to the operation of the system (absence of a recognizable driver image while driving)</li>
                                            <li>Driving without a safety belt</li>
                                            <li>Vehicle condition indicators (inside temperature, smoke, opening/closing of the cabin door, unauthorized driver)</li>
                                            <li>Presence & proper using of a child seat and child in cabin</li>
                                        </ul>
                                        <p class="imp">In-cabin camera only tracks factors, affecting on road safety, but it DOESN'T record inside videos & conversations to keep the driver's confidence & and passengers' privacy.</p> 
                                </div>
                            </div>

                            <div className="single-item" id="adas" data-aos="fade-zoom-in" data-aos-delay="200" data-aos-duration="1000">
                                <div className="item-title">
                                    <h5><span>2</span></h5>
                                    <h2>Road Obstacles Detections</h2>
                                </div>
                                <p>Front AI cameras with Advanced Driving Assistance System “ADAS” help monitor current road situation and instant changes, providing quick response and sound alerts to increase driver awareness and risk focus. Trackers and analyzers road environment detect the nearby, far obstacles and driver errors based on information from the following built-in features:</p>

                                <div className="list-items justify-content-start pt-0">
                                    <div className="single-list mb-xs-0">
                                        <ul>
                                            <li className="pb-2-md"><span>Lane departure warning (LDW)</span></li>
                                            <li className="pb-2-md"><span>Forward-collision warning (FCW)</span></li>
                                            <li className="pb-2-md"><span>Speed limit recognition (SLR)</span></li>
                                            <li><span>Safety distance alert (SDA)</span></li>
                                        </ul>
                                    </div>
                                    <div className="single-list pl-2-md">
                                        <ul>
                                            <li className="pb-2-md"><span>Pedestrian collision warning (PCW)</span></li>
                                            <li className="pb-2-md"><span>Traffic sign recognition (TSR)</span></li>
                                            <li className="pb-2-md"><span>Hard Braking (HB)</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <img src={obstacles} alt={obstacles} className="pb-2"/>

                                <div className="extra-details">
                                        <p>All ADAS options from the camera with Road Obstacles Detection do a great job, interacting with each other to provide the fastest response on changes in:</p>
                                </div>

                                <div className="list-items pt-0">
                                    <div className="single-list w-50-sm w-100 mb-xs-0">
                                        <ul>
                                            <li className="pb-2-md"><span>Road markings observation and traffic signs</span></li>
                                            <li className="pb-2-md"><span> Driver's compliance with traffic regulation (speed limits, the actual speed with the amount of speeding, etc.) </span></li>
                                            <li className="pb-2-md"><span> Compliance STOP signs/line with a definite stop</span></li>
                                            <li><span>Observation keeping marking lines during the ride (in the middle lane with an open right road, etc.)</span></li>
                                        </ul>
                                    </div>
                                    <div className="single-list w-50-sm w-100 pl-2-md">
                                        <ul>
                                            <li className="pb-2-md"><span>The critical distance to the other vehicles in front</span></li>
                                            <li className="pb-2-md"><span>The distance to the road obstacles (fence, person, animal)</span></li>
                                            <li className="pb-2-md"><span>Crossing of marking lines</span></li>
                                            <li className="pb-2-md"><span>The abrupt departure from the ride trajectory</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="single-item" id="fleet">
                                <div className="item-title" data-aos="fade-zoom-in" data-aos-delay="200" data-aos-duration="1000">
                                    <h5><span>3</span></h5>
                                    <h2>Evaluation Fleet Dashboard 24/7</h2>
                                </div>
                                <p data-aos="fade-zoom-in" data-aos-delay="200" data-aos-duration="1000">CVISION can become an indispensable assistant in fleet management, allowing owners to monitor the use and condition of vehicles remotely to receive detailed reports with:</p>

                                <div className="list-items justify-content-start pt-0" data-aos="fade-zoom-in" data-aos-delay="200" data-aos-duration="1000">
                                    <div className="single-list mb-xs-0">
                                        <ul>
                                            <li className="pb-2-md"><span>Monitoring driver behavior</span></li>
                                            <li className="pb-2-md"><span>Driving skills evaluation </span></li>
                                            <li className="pb-2-md"><span>Asset management</span></li>
                                            <li><span>Route management <br /> (incl. stopping places & areas)</span></li>
                                        </ul>
                                    </div>
                                    <div className="single-list w-50-sm pl-2-md">
                                        <ul>
                                            <li className="pb-2-md"><span>Real-time vehicle location</span></li>
                                            <li className="pb-2-md"><span>Information about leaving the working <br /> area (to track vehicle use purposes)</span></li>
                                            <li className="pb-2-md"><span>Post-accident analysis</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <img src={dashboard} alt={dashboard} className="pb-2" data-aos="fade-zoom-in" data-aos-delay="200" data-aos-duration="1000"/>

                                <div className="extra-details">
                                    <p data-aos="fade-zoom-in" data-aos-delay="200" data-aos-duration="1000">Moreover, you can create & manage the fleet owner personal account via a web application that allows you to:</p>
                                </div>

                                <div className="list-items pt-0">
                                    <div className="single-list w-50-sm w-100 mb-xs-0" data-aos="fade-zoom-in" data-aos-delay="400" data-aos-duration="1000">
                                        <ul>
                                            <li className="pb-2-md"><span>Maintain a register of activated devices, vehicles, and fleet drivers </span></li>
                                            <li className="pb-2-md"><span>Maintain a register of vehicles & drivers documentation</span></li>
                                            <li className="pb-2-md"><span>Monitor the transportation quality (cargo & traffic safety, fuel economy, etc.)</span></li>
                                        </ul>
                                    </div>
                                    <div className="single-list w-50-sm w-100 pl-2-md" data-aos="fade-zoom-in" data-aos-delay="600" data-aos-duration="1000">
                                        <ul>
                                            <li className="pb-2-md"><span>Visualize critical incidents and analyze key risk indicators</span></li>
                                            <li className="pb-2-md"><span>Account and analyze drivers' productivity and assessment of their work</span></li>
                                            <li className="pb-2-md"><span>Set up notifications & alerts system</span></li>
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

export default Product;