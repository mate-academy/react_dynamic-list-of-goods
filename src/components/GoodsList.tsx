import React, { FC } from 'react';
import { Good } from '../types';
import { GoodItem } from './GoodItem';

interface Props {
  goods: Good[];
}

export const GoodsList: FC<Props> = (props) => {
  const { goods } = props;

  return (
    <ol>
      {goods.map(({ id, name, color }) => (
        <GoodItem
          key={id}
          name={name}
          color={color}
        />
      ))}
    </ol>
  );
};
