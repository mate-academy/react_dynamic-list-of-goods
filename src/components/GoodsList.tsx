import * as React from 'react';
import { Good } from './Good';
import { GoodItem } from './GoodItem';

interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="list">
    {goods.map((good: Good) => (
      <GoodItem key={good.id} good={good} />
    ))}
  </ul>
);
