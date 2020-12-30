import React, { CSSProperties, FC } from 'react';
import Particles from 'react-particles-js';

interface ParticleBackgroundProps {
  style: CSSProperties;
}

const ParticleBackground: FC<ParticleBackgroundProps> = ({ style }) => {
  return (
    <div style={style}>
      <Particles
        style={{ position: 'fixed' }}
        params={{
          background: {
            color: {
              value: '#232323',
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'bubbles',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#fff',
            },
            links: {
              color: '#00ff94',
              distance: 50,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: true,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 1250,
              },
              value: 40,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 3,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticleBackground;
