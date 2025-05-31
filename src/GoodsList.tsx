import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => {
        let color;

        if (good.color === 'red') {
          color = 'red';
        } else if (good.color === 'green') {
          color = 'green';
        } else {
          color = 'blue';
        }

        return (
          <li key={good.id} data-cy="good" className={color}>
            {good.name}
          </li>
        );
      })}
    </ul>
  );
};
