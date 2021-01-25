import React from 'react';
import { TypeGood } from '../../types';

export const Good = ({ good: { id, name, color } }) => (
  <li
    className="Good"
    key={id}
    style={{ color: `${color}` }}
  >
    {name}
  </li>
);

Good.propTypes = {
  good: TypeGood.isRequired,
};
