import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="about-header">
                <Container>
                    <p>BELOW IS OUR MISSION</p>
                    <h1>Our mission is to enhance health
                        and well-being by providing the best total healthcare</h1>
                </Container>
            </div>
            <Container className="about-us">
                <div>
                    <img src="https://cli.21lab.co/wp-content/uploads/2021/08/image-from-rawpixel-id-3228523-png-1-14.png" alt="" />
                </div>
                <div>
                    <h1 className="mb-5">We seek always to create
                        and deliver value for you</h1>
                    <div className="mt-5">
                        <p>Our mission is to enhance health and well-being by providing the best total healthcare.</p>
                        <hr />
                        <p>Trusted partner for health. A healthy community with quality, affordable healthcare for all.</p>
                        <hr />
                        <p>We practise high standards through an effective quality management system to assure that our services meet.</p>
                    </div>
                </div>
            </Container>
            <Container className="mt-5">
                <h1>We are Proud to have a Team of Dedicated Doctors with varying interests and background</h1>
            </Container>
        </div >
    );
};

export default About;