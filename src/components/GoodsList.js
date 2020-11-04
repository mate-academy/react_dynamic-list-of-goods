import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <ul className="ui animated middle aligned list">
    {
      goods.map(good => (
        <li
          className="item good"
          key={good.id}
          style={{ color: `${good.color}` }}
        >
          {good.name}
        </li>
      ))
    }
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
}.isRequired;
