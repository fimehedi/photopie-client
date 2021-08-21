import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagramSquare, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800">
            <div className="container mx-auto px-6 py-10">
                <div className="flex justify-between items-center">
                    <p className="text-gray-200 text-sm font-family-bebas tracking-widest">&copy;PHOTOPIE @{new Date().getFullYear()}. <br className="block sm:hidden" />Development by <a href="http://fimehedi.web.app" className="underline" target="_blank" rel="noreferrer">FIMehedi</a> </p>
                    <ul className="flex items-center text-gray-200">
                        <li className="pl-3"><Link to="" className=""><FaFacebookF /></Link></li>
                        <li className="pl-3"><Link to="" className=""><FaTwitter /></Link></li>
                        <li className="pl-3"><Link to="" className=""><FaLinkedin /></Link></li>
                        <li className="pl-3"><Link to="" className=""><FaInstagramSquare /></Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;;;