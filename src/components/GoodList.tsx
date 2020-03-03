import React, { FC } from 'react';
import { Good } from './Good';

interface Props {
  goods: Good[];
}

export const GoodList: FC<Props> = (props) => (
  <ul>
    {props.goods.map(good => <Good key={good.id} {...good} />)}
  </ul>
);
