import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  function changeTypeColor(color: string) {
    if (color === 'red') {
      return 'rgb(255, 0, 0)';
    }

    if (color === 'green') {
      return 'rgb(0, 128, 0)';
    }

    return 'rgb(0, 0, 255)';
  }

  return (
    <ul>
      {goods.map(good => (
        <li
          key={good.id}
          data-cy="good"
          style={{ color: changeTypeColor(good.color) }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};
