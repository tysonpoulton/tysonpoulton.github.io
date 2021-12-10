import React from 'react';
import Particles from 'react-tsparticles';


const ParticleBackground = () => {
    const particlesInit = (main) => {
        console.log(main)
    }
    
    const particlesLoaded = (container) => {
        console.log(container)
    }



    return (
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: {
              enable: false,
              zIndex: -999,
            },
            background: {
              color: {
                value: "rgba(17, 24, 39)",
              },
            },
            fpsLimit: 30,
            interactivity: {
              events: {
                onHover: {
                  enable: false,
                  mode: "grab", 
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 120,
                  link_linked: {
                      opacity: 1,
                  },
                },
              },
            },
            particles: {
              color: {
                value: "random",
              },
              links: {
                color: "random",
                distance: 150,
                enable: true,
                opacity: 0.85,
                width: 1,
              },
              collisions: {
                enable: false,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                value: 120,
              },
              opacity: {
                value: 0.85,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: false,
                value: 3,
              },
            },
            detectRetina: false,
          }}
    />
    );
};

export default ParticleBackground;
