import { memo } from 'react';
import { Good } from './types/Good';

interface Props {
  goods: Good[];
}

export const GoodsList = memo(({ goods }: Props) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} data-cy="good" style={{ color: good.color }}>
        {good.name}
      </li>
    ))}
  </ul>
));

GoodsList.displayName = 'GoodsList';
