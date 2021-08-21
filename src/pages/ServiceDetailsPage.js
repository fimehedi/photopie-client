import React from 'react';
import ServiceDetails from '../components/serviceDetailsPage/ServiceDetails';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';

const ServiceDetailsPage = () => {

    return (
        <main>
            <Header />
            <ServiceDetails />
            <Footer />
        </main>
    );
};

export default ServiceDetailsPage;