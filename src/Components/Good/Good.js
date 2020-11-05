import React from 'react';
import { GoodShape } from '../../Shapes/GoodShape';
import './Good.scss';

export const Good = ({ good }) => (
  <li
    className="good"
    style={{ color: good.color }}
  >
    {good.name}
  </li>
);

Good.propTypes = GoodShape;
