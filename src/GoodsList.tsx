import React from 'react';

type Prors = {
  goods: Good[]
};

export const GoodsList: React.FC<Prors> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
