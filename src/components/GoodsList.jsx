import React from 'react';
import { PropTypes } from 'prop-types';

export const GoodsList = ({ goods }) => (
  <ul className="GoodsList">
    {goods.map(good => (
      <li key={good} style={{ color: good.color }}>
        {good.name}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf().isRequired,
};
