import React from 'react';
import { goodPropTypes } from '../types';

export const Good = ({ good }) => (
  <li
    style={{ color: good.color }}
    key={good.id}
  >
    {good.name}
  </li>
);

Good.propTypes = goodPropTypes;
