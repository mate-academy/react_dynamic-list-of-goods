import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => {
      let itemColor = 'rgb(0, 0, 0)';

      if (good.color === 'red') {
        itemColor = 'rgb(255, 0, 0)';
      } else if (good.color === 'green') {
        itemColor = 'rgb(0, 128, 0)';
      } else if (good.color === 'blue') {
        itemColor = 'rgb(0, 0, 255)';
      }

      return (
        <li key={good.id} data-cy="good" style={{ color: itemColor }}>
          {good.name}
        </li>
      );
    })}
  </ul>
);
