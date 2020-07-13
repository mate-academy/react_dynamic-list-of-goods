import React from 'react';

interface GoodsListProps {
  goods: Goods[];
}

export interface Goods {
  id: number;
  name: string;
  color: string;
}

export const GoodsList: React.FC<GoodsListProps> = ({ goods }) => {
  return (
    <ul>
      {goods.map(item => (
        <li
          key={item.name}
          style={{ color: `${item.color}` }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};
