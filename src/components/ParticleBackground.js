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
              enable: true,
              zIndex: -999,
            },
            background: {
              color: {
                value: "#070707",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "repulse",
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                  
                },
                resize: true,
              },
              modes: {
                repulse: {
                  distance: 400,
                  duration: 0.2,
                },
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
                value: 'random',
              },
              links: {
                color: 'random',
                distance: 150,
                enable: true,
                opacity: 0.5,
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
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 120,
              },
              opacity: {
                value: 0.7,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
    />
    );
};

export default ParticleBackground;
