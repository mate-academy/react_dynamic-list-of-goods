import React from 'react';

export const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(({ id, color, name }) => (
      <li
        key={id}
        style={{ color }}
      >
        {name}
      </li>
    ))}
  </ul>
);