import React from 'react';
import SocialIcons from './icons/SocialIcons';

const Info = () => {
    return (
        <div className="container flex h-screen justify-center items-center flex-col mx-auto text-white text-center">
           <h1 className="text-5xl pb-2 border-b-2">Tyson Poulton</h1>
           <h2 className="text-3xl italic">Software Developer</h2>
           <SocialIcons />
        </div>
    );
};

export default Info;
