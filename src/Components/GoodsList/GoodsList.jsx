import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(item => (
      <li
        key={item.id}
        style={{ color: `${item.color}` }}
      >
        {item.name}
        {'---'}
        {item.color}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
};
