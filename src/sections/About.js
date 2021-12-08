import React from 'react';
import CategorySelect from '../components/skills/CategorySelect';



const About = () => {
    return (
        <section id="about" className="w-screen flex justify-center about-container bg-white">
            <div className="about-content">
                <p className="text-xl text-left pt-20 mx-5">
                Hello! My name is Tyson and I enjoy creating things on the internet. I became interested in web development during quarantine when I started running out of ways to entertain myself. I've always loved problem solving and as it turns out, coming up with new and unique solutions when creating websites was just what I was looking for.
                </p>
                <p className="text-xl text-left pt-6 mx-5">
                Since beginning my journey in web development, I have learned and used many front end and back end technologies, but I'm most comfortable with Javascript. In my free time I enjoy spending time with friends and family, listening to music, and playing video games.
                </p>
                <div className="pt-10 border-black border-b-2" data-aos="width-expand" data-aos-duration="1000"/>
                <CategorySelect />
            </div>
        </section>
    );
};

export default About;