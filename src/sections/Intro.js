import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
import Info from '../components/Info';

const MobileBackground = () => {
    return (
        <div className="mobile-background" />
    );
}

const Intro = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isVisible, setIsVisible] = useState('visible');

    useEffect(() => {
        window.addEventListener('load', () => {
            setIsVisible('hidden');
        });
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    

    return (
        <section id="home">
            <Navbar />
            {windowWidth >= 720 ? <ParticleBackground style={{ visibility: isVisible }} /> : <MobileBackground />}
            <Info />
        </section>
    );
};

export default Intro;