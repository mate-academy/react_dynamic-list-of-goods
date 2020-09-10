import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';

export const Goodlist = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

Goodlist.propTypes = {
  goods: arrayOf(PropTypes.object).isRequired,
};
