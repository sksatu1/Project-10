import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css';

const Details = () => {
    const { serviceId } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);

    useEffect(() => {
        fetch('/servicesData.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, []);

    const selectedService = serviceDetails?.find(details => details.id === serviceId);
    console.log(selectedService);

    return (
        <div className="details">
            <div className="p-4">
                <img src={selectedService?.img} alt="" />
            </div>
            <div className="p-4">
                <h1>{selectedService?.title}</h1>
                <p>{selectedService?.description}</p>
            </div>
        </div>
    );
};

export default Details;