import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

const GoodsListComponent = ({ goods }: Props) => {
  // eslint-disable-next-line
  console.log('GoodsList render');

  return (
    <ul>
      {goods.map(good => (
        <li
          key={good.id}
          data-cy="good"
          className={`goods__item--${good.color}`}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

export const GoodsList = React.memo(GoodsListComponent);
