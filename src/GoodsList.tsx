import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => {
        let colorClass = '';

        switch (good.color) {
          case 'red':
            colorClass = 'red';
            break;
          case 'green':
            colorClass = 'green';
            break;
          case 'blue':
            colorClass = 'blue';
            break;
          default:
            colorClass = '';
        }

        return (
          <li
            key={good.id}
            data-cy="good"
            className={colorClass}
          >
            {good.name}
          </li>
        );
      })}
    </ul>
  );
};
