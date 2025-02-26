import { memo } from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList = memo(function GoodsList({ goods }: Props) {
  return (
    <ul>
      {goods.map(good => (
        <li key={good.id} style={{ color: good.color }} data-cy="good">
          {good.name}
        </li>
      ))}
    </ul>
  );
});
