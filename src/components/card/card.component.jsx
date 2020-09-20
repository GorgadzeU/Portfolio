import React from 'react';
import PropTypes from 'prop-types';
import './card.styles.css';

import { AiFillGithub } from 'react-icons/ai';
import { GoBrowser } from 'react-icons/go';

const Card = ({ img, title }) => {
  return (
    <div className='card'>
      <div className='card-details'>
        <span className='card__title'>{title}</span>
        <div className='card__actions'>
          <span className='card-action'>
            <AiFillGithub />
          </span>
          <span className='card-action'>
            <GoBrowser />
          </span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
