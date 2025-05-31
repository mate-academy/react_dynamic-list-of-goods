import React, { memo } from 'react';

interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = memo(({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <li key={good.id}>{good.name}</li>
      ))}
    </ul>
  );
});

GoodsList.displayName = 'GoodsList';
