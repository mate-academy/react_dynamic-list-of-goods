import React, { memo } from 'react';

type Props = {
  goods: Good[],
};

export const GoodsList: React.FC<Props> = memo(({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <li key={good.id} className={good.color}>
          {good.name}
        </li>
      ))}
    </ul>
  );
});
