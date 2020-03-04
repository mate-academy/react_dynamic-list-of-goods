import React, { FC } from 'react';
import { GoodItem } from '../GoodItem/GoodItem';

interface Props {
  goods: Good[];
}

export const GoodList: FC<Props> = (props) => (
  <ul className="list-group">
    {props.goods.map(good => (
      <GoodItem
        key={good.id}
        good={good}
      />
    ))}
  </ul>
);
