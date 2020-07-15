import React, { FC } from 'react';
import { Good } from './Types';
import { GoodItem } from './GoodItem';

interface Props {
  goods: Good[];
}

export const GoodsList: FC<Props> = ({ goods }) => (
  <ol className="list__items">
    {goods.map(({ id, name, color }) => (
      <GoodItem key={id} name={name} color={color} />
    ))}
  </ol>
);
