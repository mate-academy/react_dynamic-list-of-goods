import React from 'react';
import './GoodsList.scss';

type Good = {
  id: number;
  name: string;
  color: string;
};

type Props = {
  goods: Good[];
};

export const GoodsList = React.memo(({ goods }: Props) => (
  <ol className="goods__list">
    {goods.map(good => (
      <li key={good.id} data-cy="good" style={{ color: good.color }}>
        {good.name}
      </li>
    ))}
  </ol>
));

GoodsList.displayName = 'GoodsList';
