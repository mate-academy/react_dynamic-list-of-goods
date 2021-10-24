import React from 'react';

export const GoodsList: React.FC<{ goods:Good[] }> = ({ goods }) => (
  <ul>
    {goods.map((good) => (
      <li
        key={good.id}
        className="list--element"
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
