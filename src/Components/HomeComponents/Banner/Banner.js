import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import doctorImg from '../../../images/doctor/banner-doctor-1.png';
const Banner = () => {
    return (
        <div className="banner">
            <Container>
                <Row className="align-items-center">
                    <Col lg={true}>
                        <p><small>Your Hospital</small></p>
                        <h1>We are a reliable partner</h1>
                        <p>MediCare is a general 24-hour Clinic with foreign capital, confidently operating in the export of medical services.</p>
                    </Col>
                    <Col lg={true}>
                        <img src={doctorImg} alt="" /></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;