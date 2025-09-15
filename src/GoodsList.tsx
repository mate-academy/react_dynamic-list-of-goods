import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

function GoodsItemComponent({ good }: { good: Good }) {
  return (
    <li key={good.id} data-cy="good" className={`good-item ${good.color}`}>
      {good.name}
    </li>
  );
}

export const GoodsItem = React.memo(GoodsItemComponent);

function GoodsListComponent({ goods }: Props) {
  return (
    <ul>
      {goods.map(good => (
        <GoodsItem key={good.id} good={good} />
      ))}
    </ul>
  );
}

export const GoodsList = React.memo(GoodsListComponent);
