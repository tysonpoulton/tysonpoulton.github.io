import React from 'react';
import SocialIcons from '../components/icons/SocialIcons'

const Contact = () => {
    return (
        <section id="contact" className="contact-container">
            <div className="w-screen flex h-80 justify-center items-center flex-col text-center bg-gray-900 text-white">
                <h1 className="text-4xl pb-2 font-semibold">Let's get in touch!</h1>
                <SocialIcons />
           </div>
        </section>
    )
}

export default Contact
