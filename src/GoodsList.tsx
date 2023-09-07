import React from 'react';
import { Good } from './types/Good';
import './App.scss';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => {
      const { id, color, name } = good;

      return (
        <li
          key={id}
          data-cy="good"
          className={color}
        >
          {name}
        </li>
      );
    })}
  </ul>
);
