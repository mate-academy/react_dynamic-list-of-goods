import React from 'react';
import { Good } from '../../types/Good';
import './GoodsList.scss';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="GoodsList">
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        style={{ color: `${good.color}`, width: '50%' }}
        className="box my-2"
      >
        {good.name}
      </li>
    ))}
  </ul>
);
