import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';

const ClientLayout = () => {
  return (
    <>
       <Header />
       <Outlet />
       <Footer />
    </>
  );
};

export default ClientLayout;