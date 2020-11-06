import React from 'react';
import PropTypes from 'prop-types';

export const ListCreator = ({ array }) => (
  <ul>
    {array.map(item => (
      <li
        key={item.id}
        style={{ color: item.color }}
      >
        {item.name}
      </li>
    ))}
  </ul>
);

ListCreator.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
