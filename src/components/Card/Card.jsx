import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

export const Card = ({ name, color, goodImage }) => (
    <div className="card" style={{ borderColor: color }}>
      <img className="good-img" src={goodImage} alt="123" />
      <h2>{name}</h2>
    </div>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  goodImage: PropTypes.string.isRequired,
};
