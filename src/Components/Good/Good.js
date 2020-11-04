import React from 'react';
import { GoodShape } from '../../Shapes/GoodShape';

export const Good = ({ good }) => (
  <li
    style={{ color: good.color }}
  >
    {good.name}
  </li>
);

Good.propTypes = GoodShape;
