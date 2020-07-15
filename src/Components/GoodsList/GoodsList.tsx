import React, {FC} from 'react';
import { Good } from '../../types';
import { GoodItem } from '../GoodItem/GoodItem';

type Props = {
  goods: Good[];
};

export const GoodsList: FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(({ id, name, color }) => (
      <GoodItem key={id} name={name} color={color} />
    ))}
  </ul>
);
