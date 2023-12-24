import { FC, memo } from 'react';
import { Good } from './types';

type Props = {
  goods: Good[] | null,
};

export const GoodsList: FC<Props> = memo(({ goods }) => (
  <ul>
    {goods?.map(good => (
      <li
        key={good.id}
        data-cy="good"
        style={{ color: `${good.color}` }}
      >
        {good.name}
      </li>
    ))}
  </ul>
));
