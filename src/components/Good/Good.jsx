import React from 'react';
import { GoodsShape } from '../../types';

export const Good = ({ good }) => (
  <li
    style={{
      color: 'white',
      backgroundColor: `${good.color}`,
    }}
    key={good.id}
    className="list-group-item"
  >
    {good.name}
  </li>
);

Good.propTypes = GoodsShape;
