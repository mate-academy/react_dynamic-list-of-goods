import React, { FC } from 'react';
import 'bulma/css/bulma.css';
import { GoodItem } from '../GoodItem/GoodItem';

interface Props {
  goods: Good[];
}

export const GoodsList: FC<Props> = ({ goods }) => (
  <ul className="list">
    {goods.map(good => (
      <GoodItem
        key={good.id}
        name={good.name}
        color={good.color}
      />
    ))}
  </ul>
);
