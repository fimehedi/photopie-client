import React from 'react';
import Banner from '../components/home/Banner';
import Photographer from '../components/home/Photographer';
import Services from '../components/shared/Services';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

const Home = () => {
    return (
        <main>
            <Header />
            <Banner />
            <Services seeMore={true} />
            <Photographer />
            <Footer />
        </main>
    );
};

export default Home;