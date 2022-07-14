import React from 'react';
import { Good } from '../../types/Good';
import './GoodList.scss';

type Props = {
  goods: Good[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="goodlist">
    {goods.map(good => (
      <li
        key={good.id}
        className="goodlist__item"
        style={{ backgroundColor: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
