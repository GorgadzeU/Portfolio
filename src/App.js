import React from 'react';
import './App.css';
import { Element } from 'react-scroll';

import Particles from 'react-particles-js';

import HomeSection from './sections/home/home.section';
import ProjectsSection from './sections/projects/projects.section';
import AboutSection from './sections/about/about.section';
import Nav from './components/nav/nav.component';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Element name='home'>
        <HomeSection />
      </Element>
      <Element name='projects'>
        <ProjectsSection />
      </Element>
      <Element name='about'>
        <AboutSection />
      </Element>

      <Particles
        className='particles'
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            line_linked: {
              enable: true,
              opacity: 0.02,
            },
            move: {
              direction: 'right',
              speed: 0.05,
            },
            size: {
              value: 1,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: 'push',
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
}

export default App;
