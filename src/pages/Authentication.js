import React from 'react';
import AuthForm from '../components/authentication/AuthForm';
import { initializeAuthApp } from '../components/authentication/AuthManager';

initializeAuthApp();

const Authentication = ({ isSignup }) => {
    return (
        <AuthForm isSignup={isSignup} />
    );
};

export default Authentication;