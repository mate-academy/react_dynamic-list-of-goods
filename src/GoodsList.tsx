import { FC } from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(({ id, name, color }) => (
      <li
        key={id}
        data-cy="good"
        style={{ color }}
      >
        {name}
      </li>
    ))}
  </ul>
);
