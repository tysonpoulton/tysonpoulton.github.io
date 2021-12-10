import React, { useState, useEffect } from 'react';


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
                    <span onClick={() => {
                            document.getElementById("home").scrollIntoView({ behavior: "smooth" });
                    }}>Home</span>
                </li>
                <li className="nav-item">
                    <span onClick={() => {
                            document.getElementById("about").scrollIntoView({ behavior: "smooth" });
                    }}>About</span>
                </li>
                <li className="nav-item">
                    <span onClick={() => {
                            document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
                    }}>Projects</span>
                </li>
                <li className="nav-item">
                    <span onClick={() => {
                        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
                    }}>Contact</span>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;