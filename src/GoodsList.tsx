import React from 'react';
import { Good } from './types/Good';
import './GoodsColors.scss';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} data-cy="good" className={good.color}>
        {good.name}
      </li>
    ))}
  </ul>
);
