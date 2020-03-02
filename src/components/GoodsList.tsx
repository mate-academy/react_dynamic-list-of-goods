import React from 'react';

interface GoodsListProps {
  goods: { id: number; name: string; color: string }[];
}

export const GoodsList: React.FC<GoodsListProps> = ({ goods }) => (
  <ul>
    {goods.map(item => (
      <li
        key={item.id}
        style={{ color: item.color }}
      >
        {item.name}
      </li>
    ))}
  </ul>
);
