import { FC } from 'react';

interface GoodsListProps {
  goodsList: Good[]
}

export const GoodsList: FC<GoodsListProps> = ({ goodsList }) => (
  <ul>
    {goodsList.map(goodItem => (
      <li
        key={goodItem.id}
        style={{
          color: goodItem.color,
        }}
      >
        {goodItem.name}
      </li>
    ))}
  </ul>
);
