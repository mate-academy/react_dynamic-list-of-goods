import React from 'react';
import { Good } from '../../interfaces';

interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="list">
      {
        goods.map(good => (
          <li
            key={good.id}
            style={{ color: good.color }}
          >
            {good.name}
          </li>
        ))
      }
    </ul>
  );
};
