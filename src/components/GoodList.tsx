import React, { FC } from 'react';
import { Loader } from './Loader';
import { Good } from '../interfaces/Good';
import { GoodsItem } from './GoodsItem';

interface Props {
  goods: Good[];
  isLoading: boolean;
}

export const GoodList: FC<Props> = ({ goods, isLoading }) => {
  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <ul className="goods__list flow-text">
      {
        goods.map(good => (
          <GoodsItem
            key={good.id}
            name={good.name}
            color={good.color}
            createdAt={good.createdAt}
          />
        ))
      }
    </ul>
  );
};
