import React from 'react';
import PropTypes from 'prop-types';
import { Good } from '../Good';

export const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good} style={{ color: `${good.color}` }}>
        <Good good={good} />
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
  ),
};

GoodsList.defaultProps = {
  goods: [],
};
