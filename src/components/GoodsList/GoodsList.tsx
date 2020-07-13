import React from 'react';
import { Good } from '../../interfaces/good';

interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map((good: Good) => (
      <li key={good.id}>
        <span style={{ color: good.color }}>
          {good.name}
        </span>
      </li>
    ))}
  </ul>
);
