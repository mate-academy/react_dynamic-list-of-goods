import React from 'react';
import PropTypes from 'prop-types';
import './GoodsList.scss';

export const GoodsList = ({ goodsList }) => (
  <ul className="list-group list-group-flush">
    {goodsList.map(good => (
      <li
        key={good.id}
        style={{ color: good.color }}
        className="list-group-item"
      >
        {good.name}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
