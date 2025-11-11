import React, { useEffect } from 'react';
import Navbar from '../NavBar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Lenis from '@studio-freight/lenis';

const Root = () => {

    useEffect(() => {

        const lenis = new Lenis({
            duration: 1.6,
            smoothWheel: true,
            smoothTouch: true,
            direction: 'vertical'
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);


        return () => lenis.destroy();
    }, []);

    return (
        <div className="overflow-hidden">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;
