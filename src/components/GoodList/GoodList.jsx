import React from 'react';

export const Goodlist = ({ goods }) => (
  <ul>
    {goods ? goods.map(good => (
      <li key={good.id} style={{ color: good.color }}>{good.name}</li>
    )) : ''}
  </ul>
);
