import React from 'react';

import Particles from 'react-particles-js';

import './ParticlesBG.scss';

function ParticlesBG() {
  return (
    <div className="particles-container">
      <Particles
        className="particles-container__particles"
        params={{
          particles: {
            number: {
              value: 11,
              density: {
                enable: false,
                value_area: 1000,
              },
            },
            color: {
              value: ['#779cd3'],
            },
            shape: {
              type: ['polygon'],
              stroke: {
                width: 3,
                color: '#000',
              },
              // polygon: {
              //   nb_sides: 3,
              // },
              polygon: {
                enable: true,
                scale: 0.5,
                type: 'inline',
                move: {
                  radius: 10,
                },
                url: '/small-deer.2a0425af.svg',
                inline: {
                  arrangement: 'equidistant',
                },
                draw: {
                  enable: true,
                  stroke: {
                    color: 'rgba(255, 255, 255, .2)',
                  },
                },
              },
              image: {
                src: './img/header-hero.jpg',
                width: 55,
                height: 55,
              },
            },
            opacity: {
              value: 0.7,
              random: true,
              anim: {
                enable: true,
                speed: 2.5,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 11,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 90,
              color: '#3b0a31',
              opacity: 0,
              width: 1.5,
            },
            move: {
              enable: true,
              speed: 6,
              direction: 'top',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'grab',
              },
              onclick: {
                enable: true,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 133,
                line_linked: {
                  opacity: 0.9,
                },
              },
              bubble: {
                distance: 800,
                size: 55,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 400,
                duration: 0.4,
              },
              push: {
                particles_nb: 3,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
}

export default ParticlesBG;
