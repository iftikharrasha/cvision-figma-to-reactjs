import React from 'react';

const Contact = () => {
    return (
        <>
            <section className="contact" id="contact">
                <div className="container">
                    <div className="contact-contents">
                        <h6 data-aos="fade-zoom-in" data-aos-delay="200" data-aos-duration="1000">What Do You Think about CVISION?</h6>
                        <h2 data-aos="fade-zoom-in" data-aos-delay="400" data-aos-duration="1000">Drop Us a Line</h2>
                        <p data-aos="fade-zoom-in" data-aos-delay="600" data-aos-duration="1000">CVS dual cameras are in the final developing phase and will be available soon for everyone who wants to try the newest CVISION solution for semi-autonomous driving experience. Do you interested in or would to preorder the product now? Keep us in touch, and we will be glad to satisfy your needs in safety increase!</p>
                        <div className="contact-form">
                            <form>
                                <div className="form-items">
                                    <input type="text" placeholder="Your Name" required data-aos="fade-zoom-in" data-aos-delay="800" data-aos-duration="1000"/>
                                    <input type="email" placeholder="Your e-mail address" required data-aos="fade-zoom-in" data-aos-delay="1000" data-aos-duration="1000"/>
                                    <textarea rows="5" cols="50" placeholder="Your message" required data-aos="fade-zoom-in" data-aos-delay="1100" data-aos-duration="1000"></textarea>
                                    <button type="submit" data-aos="fade-up" data-aos-delay="1200" data-aos-duration="1000">SEND MESSAGE</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;