// src/components/GoodsList.tsx
import React from 'react';
import type { Good } from '../types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="GoodsList">
      {goods.map(good => (
        <li
          key={good.id}
          className="GoodsList__item"
          style={{ color: good.color }} // or backgroundColor depending on markup
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};
