import React from 'react';
import Checkout from '../components/checkout/Checkout';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';

const CheckoutPage = () => {
    return (
        <main>
            <Header />
            <Checkout />
            <Footer />
        </main>
    );
};

export default CheckoutPage;