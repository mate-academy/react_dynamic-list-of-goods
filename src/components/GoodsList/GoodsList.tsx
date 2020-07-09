import React, { FC } from 'react';
import { Product } from '../../interfaces/Product';
import { Preloader } from '../Preloader';
import { GoodsItem } from '../GoodsItem';

interface GoodsProps {
  goods: Product[];
  isLoading: boolean;
}

export const GoodsList: FC<GoodsProps> = ({ goods, isLoading }) => {
  if (isLoading) {
    return (
      <div className="center-align">
        <Preloader />
      </div>
    );
  }

  if (!goods.length) {
    return <h3 className="center-align">No goods.</h3>;
  }

  return (
    <ul className="goods">
      {
        goods.map(product => (
          <GoodsItem
            key={product.id}
            name={product.name}
            color={product.color}
            createdAt={product.createdAt}
          />
        ))
      }
    </ul>
  );
};
