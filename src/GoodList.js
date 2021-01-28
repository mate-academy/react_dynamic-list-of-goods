import React from 'react';
import PropTypes from 'prop-types';

export const GoodList = ({ goods }) => (
  <ul>
    { goods.map(good => (
      <li style={{ color: good.color }} key={good.id}>
        {good.name}
      </li>
    ))}
  </ul>
);

GoodList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
