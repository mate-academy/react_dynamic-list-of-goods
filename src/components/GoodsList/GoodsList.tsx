import React from 'react';
import { Good } from '../../react-app-env';
import './GoodsList.scss';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="list">
    {goods.map(good => (
      <li
        style={{ color: good.color }}
        key={good.id}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
