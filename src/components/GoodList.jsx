import React from 'react';

export const GoodList = ({ goods }) => (
  goods.map(good => (
    <li key={good.id} style={{ color: good.color }}>{good.name}</li>
  ))
);
