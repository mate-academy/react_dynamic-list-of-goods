import React from 'react';

export const GoodsList: React.FC = ({ list }) => (
  <ul className="list">
    {list.map(good => (
      <li key={good} className="list__item" style={{ color: good.color }}>
        {good.name}
      </li>
    ))}
  </ul>
);

