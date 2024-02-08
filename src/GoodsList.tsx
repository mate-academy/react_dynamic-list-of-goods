import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  const getColorClass = (color: string) => {
    switch (color) {
      case 'red':
        return 'color-red';
      case 'green':
        return 'color-green';
      case 'blue':
        return 'color-blue';
      default:
        return '';
    }
  };

  return (
    <ul>
      {goods.map(good => (
        <li
          key={good.id}
          data-cy="good"
          className={getColorClass(good.color)}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};
