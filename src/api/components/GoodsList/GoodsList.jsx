import React from 'react';

export const GoodsList = ({ goods }) => (
  <ul className="goods__list">
    {goods.map(good => (
      <li key={good.id} style={{ color: `${good.color}` }}>
        {good.name}
      </li>
    ))}
  </ul>
);
