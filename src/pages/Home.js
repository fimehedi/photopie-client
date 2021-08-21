import React from 'react';
import Blogs from '../components/home/Blogs';
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
            <Blogs />
            <Footer />
        </main>
    );
};

export default Home;