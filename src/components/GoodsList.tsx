import React from 'react';

export interface Good {
  id: number;
  name: string;
  color: string;
}

export interface GoodsArr {
  goods: Good[];
}

export const GoodsList: React.FC<GoodsArr> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <li style={{ color: `${good.color}` }}>
          {' '}
          {good.name}
        </li>
      ))}
    </ul>
  );
};
