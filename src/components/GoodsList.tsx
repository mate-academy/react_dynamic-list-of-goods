import React from 'react';
import { GoodItem } from './GoodItem';

interface GoodsListProps {
  goods: Good[];
}

export const GoodsList = (props: GoodsListProps): JSX.Element => {
  const { goods } = props;

  return (
    <ul>
      {goods.map((good: Good) => {
        const { id, name, color } = good;

        return (
          <GoodItem
            key={id}
            name={name}
            color={color}
          />
        );
      })}
    </ul>
  );
};
