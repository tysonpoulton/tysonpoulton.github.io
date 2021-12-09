import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";


const Navbar = () => {
    const [navColor, setNavColor] = useState('white');
    const [navBackground, setNavBackground] = useState('transparent');
    const [navShadow, setNavShadow] = useState('none');

    const listenScrollEvent = () => {
        window.scrollY > 895 ? setNavColor('black') : setNavColor('white')
        window.scrollY > 895 ? setNavBackground('white') : setNavBackground('transparent')
        window.scrollY > 895 ? setNavShadow('0 3px 6px rgba(0, 0, 0, 0.16)') : setNavShadow('none');
    };
    
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
    }, []);

    return (
        <nav className="fixed w-full pt-5 pb-5 pr-10 z-10" style={{ background: navBackground, boxShadow: navShadow }}>
            <ul className="flex flex-row float-right text-2xl text-center font-semibold gap-5" style={{ color: navColor }}>
                <li className="nav-item">
                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={750}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={750}>About</Link>
                </li>
                <li className="nav-item">
                    <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={750}>Projects</Link>
                </li>
                <li className="nav-item">
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={750}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
