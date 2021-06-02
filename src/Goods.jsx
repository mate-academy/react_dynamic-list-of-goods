import React from 'react';
import PropTypes from 'prop-types';

export const Goods = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} style={{ color: `${good.color}` }}>
        {good.name}
      </li>
    ))}
  </ul>
);

Goods.propTypes = {
  goods: PropTypes.arrayOf({}).isRequired,
};
