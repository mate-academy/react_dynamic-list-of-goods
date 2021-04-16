import React from 'react';
import PropTypes from 'prop-types';

import './GoodsList.scss';

export const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        className="item"
        style={{ color: `${good.color}` }}
        key={good.id}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
const Good = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape(Good),
  ).isRequired,
};
