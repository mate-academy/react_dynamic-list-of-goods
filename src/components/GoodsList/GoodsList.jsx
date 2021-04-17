import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <>
    <h1 className="has-text-centered is-size-3">List of Goods</h1>
    <ul>
      {goods.map(good => (
        <li
          className="has-text-centered is-size-4"
          style={{ color: good.color }}
          key={good.id}
        >
          {good.name}
        </li>
      ))}
    </ul>
  </>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
