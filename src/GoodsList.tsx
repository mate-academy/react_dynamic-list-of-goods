import { memo } from 'react';
import { Good } from './types/Good';

type GoodsListProps = {
  goods: Good[];
};

const GoodsListBase = ({ goods }: GoodsListProps) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} data-cy="good" style={{ color: good.color }}>
        {good.name}
      </li>
    ))}
  </ul>
);

export const GoodsList = memo(GoodsListBase);
GoodsList.displayName = 'GoodsList';
