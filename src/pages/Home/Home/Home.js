import React from 'react';
import Banner from '../Banner/Banner';
import ExtraSEction from '../ExtraSection/ExtraSEction';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ExtraSEction></ExtraSEction>
        </div>
    );
};

export default Home;