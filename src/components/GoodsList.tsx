import React from 'react';
import { Good } from '../react-app-env';

type Props = {
  allGoods: Good[];
};

export const GoodsList: React.FC<Props> = ({ allGoods }) => {
  return (
    <ul>
      {allGoods.map((good) => (
        <li
          style={{ color: `${good.color}` }}
          key={good.id}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};
