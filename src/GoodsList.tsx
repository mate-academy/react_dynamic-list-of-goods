import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

const getColorStyle = (color: string): React.CSSProperties => {
  switch (color) {
    case 'red':
      return { color: 'rgb(255, 0, 0)' };
    case 'green':
      return { color: 'rgb(0, 128, 0)' };
    case 'blue':
      return { color: 'rgb(0, 0, 255)' };
    default:
      return { color: 'black' };
  }
};

export const GoodsList: React.FC<Props> = React.memo(({ goods }) => (
  <ul data-cy="goods-list">
    {goods.map(good => (
      <li key={good.id} style={getColorStyle(good.color)} data-cy="good">
        {good.name}
      </li>
    ))}
  </ul>
));

GoodsList.displayName = 'GoodsList';
