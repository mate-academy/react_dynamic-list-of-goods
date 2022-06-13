import React from 'react';
import { Good } from '../types/Good';

import './GoodsList.scss';

interface Props {
  allGoods: Good[],
}

export const GoodsList: React.FC<Props> = ({ allGoods }) => {
  return (
    <ul className="GoodsList">
      {allGoods.map(good => (
        <li
          key={good.id}
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};
