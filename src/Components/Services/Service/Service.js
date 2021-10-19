import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, title, img, description } = service;
    return (
        <div className="card">
            <Card style={{ border: 0 }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to={`/service/${id}`}><Button variant="primary">Details</Button></Link>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Service;