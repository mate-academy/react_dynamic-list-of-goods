import React from 'react';
import PropTypes from 'prop-types';

export const ButtonsList = ({ goods }) => (
  <ul>
    {goods.map(d => (
      <li
        key={d.id}
        style={{ color: `${d.color}` }}
      >
        {d.name}
      </li>
    ))}
  </ul>
);

ButtonsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
