import React from 'react';
import PropTypes from 'prop-types';
import { GoodShape } from '../../shapes/GoodShape';

export const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(({ id, name, color }) => (
      <li key={id} style={{ color }}>
        {name}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(GoodShape).isRequired,
};
