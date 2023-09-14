import React from 'react';
import { Good } from '../../types/Good';
import { GoodInfo } from '../GoodInfo/GoodInfo';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <GoodInfo good={good} key={good.id} />
    ))}
  </ul>
);
