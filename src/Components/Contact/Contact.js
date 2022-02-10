import React from 'react';

const Contact = () => {
    return (
        <>
            <section className="contact" id="contact">
                <div className="container">
                    <div className="contact-contents">
                        <h6>What Do You Think about CVISION?</h6>
                        <h2>Drop Us a Line</h2>
                        <p>CVS dual cameras are in the final developing phase and will be available soon for everyone who wants to try the newest CVISION solution for semi-autonomous driving experience. Do you interested in or would to preorder the product now? Keep us in touch, and we will be glad to satisfy your needs in safety increase!</p>
                        <div className="contact-form">
                            <form>
                                <div className="form-items">
                                    <input type="text" placeholder="Your Name" required/>
                                    <input type="email" placeholder="Your e-mail address" required/>
                                    <textarea rows="5" cols="50" placeholder="Your message" required></textarea>
                                    <button type="submit">SEND MESSAGE</button>
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