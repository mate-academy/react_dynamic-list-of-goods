import React from 'react';
import { Good } from './Good';

export const GoodList: React.FC<{goods: Good[]}> = (props) => (
  <ul>
    {props.goods.map(good => <Good good={good} />)}
  </ul>
);
