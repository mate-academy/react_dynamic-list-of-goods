import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = React.memo(({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
), (prevProps, nextProps) => {
  if (prevProps.goods.length !== nextProps.goods.length) {
    return false;
  }

  return prevProps.goods.every(
    (good, index) => good.id === nextProps.goods[index].id,
  );
});
