import React from 'react';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
import Info from '../components/Info';

const Intro = () => {
    return (
        <section id="home">
            <Navbar />
            <ParticleBackground />
            <Info />
        </section>
    );
};

export default Intro;