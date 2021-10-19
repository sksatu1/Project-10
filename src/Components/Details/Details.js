import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css';

const Details = () => {
    const { serviceId } = useParams();
    const { serviceDetails, setServiceDetails } = useState([]);
    const { singleDetails, setSingleDetails } = useState({});

    useEffect(() => {
        fetch('./servicesData.json')
            .then(res => res.json())
            .then(data => console.log(data));
    }, []);

    // useEffect(() => {
    //     const foundDetails = serviceDetails?.find(service => service.id === serviceId)
    //     setSingleDetails(foundDetails)
    // }, []);

    return (
        <div className="details">
            <div>
                <h2>this is details {serviceId}</h2>
                <p>{singleDetails?.title}</p>
            </div>
        </div>
    );
};

export default Details;