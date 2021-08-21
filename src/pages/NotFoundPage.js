import React from 'react';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import NotFound from '../components/shared/NotFound';

const NotFoundPage = ({ code, msg }) => {
    return (
        <main>
            <Header />
            <NotFound code={code} msg={msg} />
            <Footer />
        </main>
    );
};

export default NotFoundPage;