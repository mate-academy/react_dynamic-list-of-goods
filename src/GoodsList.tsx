import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

const getColor = (good: Good) => {
  if (good.color === 'red') {
    return 'red';
  } else if (good.color === 'green') {
    return 'green';
  } else if (good.color === 'blue') {
    return 'blue';
  } else {
    return 'black';
  }
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} data-cy="good" style={{ color: getColor(good) }}>
        {good.name}
      </li>
    ))}
  </ul>
);
