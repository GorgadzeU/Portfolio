import React from 'react';

import './home.styles.css';

import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';

const HomeSection = (props) => {
  return (
    <div className='home'>
      <div className='home__title'>
        <h1 className='home__name'>
          BEKA <span className='highlight'>GORGADZE</span>
        </h1>
        <h2 className='home__field'>
          FULL-STACK <span className='highlight'>WEB</span> DEVELOPER
        </h2>
      </div>

      <section className='skills'>
        <span className='skill'>
          <a href='google.com'>
            <AiFillGithub />
          </a>
        </span>

        <span className='skill'>
          <a href='google.com'>
            <AiFillLinkedin />
          </a>
        </span>

        <span className='skill'>
          <a href='google.com'>
            <AiFillFacebook />
          </a>
        </span>
      </section>
    </div>
  );
};

export default HomeSection;
