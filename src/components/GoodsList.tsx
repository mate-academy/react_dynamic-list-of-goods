import React from 'react';
import { Good } from '../interfaces';

interface Props {
  goodsList: Good[];
}

export const GoodsList: React.FC<Props> = ({ goodsList }) => {
  return (
    <ul className="list-group mt-5">
      {goodsList.map(good => (
        <li
          className="list-group-item"
          key={good.id}
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};
