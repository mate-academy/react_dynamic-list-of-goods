import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} data-cy="good" style={{ backgroundColor: good.color }}>
        {good.name}
      </li>
    ))}
  </ul>
);

export default React.memo(GoodsList);
