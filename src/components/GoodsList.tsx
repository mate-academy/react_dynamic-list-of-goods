import React from 'react';

interface Props {
  goods: Goods;
}

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        style={{
          color: good.color,
        }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
