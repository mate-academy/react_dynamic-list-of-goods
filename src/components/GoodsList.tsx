import React from 'react';
import { Good } from './Interface';

interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <div className="content">
    <ul>
      {goods.map(good => (
        <li key={good.id} style={{ color: good.color }}>
          {good.name}
        </li>
      ))}
    </ul>
  </div>
);
