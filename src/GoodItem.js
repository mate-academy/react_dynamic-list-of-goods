import React from 'react';
import PropTypes from 'prop-types';

const GoodItem = ({ good }) => (
  <li
    style={{ color: good.color }}
    className="li"
  >
    {good.name}
  </li>
);

GoodItem.propTypes = {
  good: PropTypes.shape({
    color: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default GoodItem;
