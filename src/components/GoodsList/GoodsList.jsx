import React from 'react';

export const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.name} style={{ color: good.color }}>{good.name}</li>
    ))}
  </ul>
);
