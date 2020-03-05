import React, { FC } from 'react';
import { GoodItem } from '../GoodItem/GoodItem';

interface Props {
  goods: Good[];
}

export const GoodList: FC<Props> = ({ goods }) => (
  <ul className="list-group">
    {goods.map(good => (
      <GoodItem
        key={good.id}
        good={good}
      />
    ))}
  </ul>
);
