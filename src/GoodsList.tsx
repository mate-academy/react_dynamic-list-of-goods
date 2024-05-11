import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }: Props) => {
  return (
    <ul>
      {goods.map(good => (
        <>
          <li
            data-cy="good"
            key={good.id}
            style={good.color ? { color: `${good.color}` } : undefined}
          >
            {good.name}
          </li>
        </>
      ))}
    </ul>
  );
};
