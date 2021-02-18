import React from 'react';
import PropTypes from 'prop-types';
import './GoodsList.scss';

export const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(({ id, name, color }) => (
      <li
        key={id}
        style={{ color }}
      >
        {name}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
