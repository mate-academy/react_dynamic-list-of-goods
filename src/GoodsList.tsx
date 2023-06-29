import React, { memo } from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};
const rgbColor: { [key: string]: string } = {
  red: 'rgb(255, 0, 0)',
  green: 'rgb(0, 128, 0)',
  blue: 'rgb(0, 0, 255)',
};

export const GoodsList: React.FC<Props> = memo(({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} data-cy="good" style={{ color: `${rgbColor[good.color]}` }}>
        {good.name}
      </li>
    ))}
  </ul>
));
