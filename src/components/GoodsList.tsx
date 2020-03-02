import React from 'react';

export const GoodsList: React.FC<StateApp> = ({ goods }) => (
  <ul>
    {goods.map(item => (
      <li
        key={item.id}
        style={{
          color: item.color,
        }}
      >
        {item.name}
      </li>
    ))}
  </ul>
);
