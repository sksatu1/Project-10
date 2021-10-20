import React from 'react';
import { Container } from 'react-bootstrap';
import { BsFillChatDotsFill, BsFillGeoAltFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <Container>
                <hr />
                <div className="footer">
                    <div>
                        <h4>SK Private Hospital headquarters at USA</h4>
                        <p><BsFillChatDotsFill /> Chat or Call 7 (465) 474-01-01</p>
                        <p><BsFillGeoAltFill /> Beverley Rd Brooklyn, New York 1226 US</p>
                    </div>
                    <div>
                        <h4>Page</h4>
                        <NavLink className="footer-link" to="/home">Home</NavLink><br />
                        <NavLink className="footer-link" to="/about">About</NavLink><br />
                        <NavLink className="footer-link" to="/services">Services</NavLink><br />
                        <NavLink className="footer-link" to="/contact">Contact</NavLink>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;