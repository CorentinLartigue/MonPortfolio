import React from 'react';
import {Outlet, ScrollRestoration} from 'react-router-dom';
import Navbar from '../components/Navbar.tsx';
import Footer from '../components/Footer.tsx';

const MainLayout: React.FC = () => {
    return (
        <div className="app-layout">
            <ScrollRestoration />
            <Navbar/>
            <div className="app-main-content">
                <div className="app-content-wrapper">
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;