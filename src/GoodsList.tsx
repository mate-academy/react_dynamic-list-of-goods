import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[],
  errorMessage: string | null,
};

export const GoodsList: React.FC<Props> = React.memo((props) => {
  const { goods, errorMessage } = props;

  return (
    <ul>
      {errorMessage || goods.map(good => (
        <li
          key={good.id}
          data-cy="good"
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
});
