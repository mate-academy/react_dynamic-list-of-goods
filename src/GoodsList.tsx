import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  const colorNamesToRgb: { [key: string]: string } = {
    red: 'rgb(255, 0, 0)',
    green: 'rgb(0, 128, 0)',
    blue: 'rgb(0, 0, 255)',
  };

  return (
    <ul>
      {goods.map(good => (
        <li
          key={good.id}
          data-cy="good"
          style={{ color: colorNamesToRgb[good.color] }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};
