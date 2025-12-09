import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <li
          key={good.id}
          data-cy="good"
          style={{ color: `${good.color.toLowerCase()}` }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

export default React.memo(GoodsList);
