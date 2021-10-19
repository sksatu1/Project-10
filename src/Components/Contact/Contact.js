import React from 'react';
import { Container } from 'react-bootstrap';
import { BsFillGeoAltFill, BsFillTelephoneFill, BsFillEnvelopeFill } from 'react-icons/bs';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-header">
                <Container>
                    <h1>Get in Touch</h1>
                    <p>Contact Us for any emergencies. We will help you as we do.</p>
                </Container>
            </div>
            <Container className="contact-us">
                <div>
                    <h1>MediCare</h1>
                    <p>We are always responsible to you. Contact us or send us an email.</p>
                </div>
                <div>
                    <p><BsFillGeoAltFill /> Beverley Rd Brooklyn, New York 1226 US</p>
                    <p><BsFillTelephoneFill /> +891 6656 5656</p>
                    <p><BsFillEnvelopeFill /> help.medicare @mail.com</p>
                </div>
            </Container>
        </div>
    );
};

export default Contact;