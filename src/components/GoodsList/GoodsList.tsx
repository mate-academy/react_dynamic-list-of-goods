import React from 'react';
import { Product } from '../../interfaces/Product';
import { Preloader } from '../Preloader';
import { GoodsItem } from '../GoodsItem';

interface GoodsProps {
  goods: Product[];
  isLoading: boolean;
}

export const GoodsList: React.FC<GoodsProps> = ({ goods, isLoading }) => {
  if (isLoading) {
    return (
      <div className="center-align">
        <Preloader />
      </div>
    );
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
