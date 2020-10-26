import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goodsList = [] }) => (
  <ul>
    {goodsList.map(good => (
      <li key={good.id} style={{ color: `${good.color}` }}>
        {good.name}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
