import React from 'react';
import PropTypes from 'prop-types';
import './nav.styles.css';

import { Link } from 'react-scroll';

const Nav = (props) => {
  return (
    <div className='nav'>
      <Link
        activeClass='active'
        to='home'
        spy={true}
        smooth={true}
        // hashSpy={true}
        duration={500}
        isDynamic={true}
        className='link-text'
      >
        Home
      </Link>

      <Link
        activeClass='active'
        className='link-text'
        to='projects'
        spy={true}
        smooth={true}
        // hashSpy={true}
        duration={500}
        isDynamic={true}
      >
        Projects
      </Link>

      <Link
        activeClass='active'
        className='link-text'
        to='about'
        spy={true}
        smooth={true}
        // hashSpy={true}
        duration={500}
        isDynamic={true}
      >
        About
      </Link>
    </div>
  );
};

Nav.propTypes = {};

export default Nav;
