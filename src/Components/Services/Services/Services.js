import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = ({ slices }) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./servicesData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <Container>
            <div className="services">
                <h3>Our Services</h3>
            </div>
            <div className="grid">
                {
                    services.slice(0, slices).map(service => <Service
                        key={service.id}
                        service={service}></Service>)
                }
            </div>
        </Container>
    );
};

export default Services;