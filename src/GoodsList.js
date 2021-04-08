import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goodsList }) => (
  <ul className="list">
    {
        goodsList.map(good => (
          <li
            key={good.id}
            className="list__item"
            style={{ color: good.color }}
          >
            {good.name}
          </li>
        ))
      }
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
