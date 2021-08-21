import React from 'react';
import Orders from '../components/orders/Orders';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';

const OrdersPage = () => {
    return (
        <main>
            <Header />
            <Orders />
            <Footer />
        </main>
    );
};

export default OrdersPage;