import React from 'react';
import { Good } from '../../types/Good';
import { GoodInfo } from '../GoodInfo';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="list">
    {goods.map(good => (
      <GoodInfo
        key={good.id}
        good={good}
      />
    ))}
  </ul>
);
