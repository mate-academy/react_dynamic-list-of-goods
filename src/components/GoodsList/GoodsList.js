import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <ul className="list-group">
    {goods.map(({ id, color, name }) => (
      <li
        key={id}
        style={{ color: `${color}` }}
        className="list-group-item list-group-item-secondary mb-1"
      >
        {name}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};
