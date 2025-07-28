import React from 'react';
import { Good } from './types/Good';

import './styles/GoodsStyles.scss';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <li key={good.id} data-cy="good" className={`${good.color}`}>
          {good.name}
        </li>
      ))}
    </ul>
  );
};
