import React from 'react';
import Services from '../../Services/Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services slices={6}></Services>
        </div>
    );
};

export default Home;