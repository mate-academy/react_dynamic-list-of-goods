import React from 'react';
import { Good } from './Good';

interface Props {
  goods: Good[];
}

export const GoodList: React.FC<Props> = (props) => (
  <ul>
    {props.goods.map(good => <Good good={good} />)}
  </ul>
);
