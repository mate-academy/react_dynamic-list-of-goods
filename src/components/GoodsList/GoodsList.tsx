import React from 'react';

type Props = {
  goods: Good[];
};

export const GoodList: React.FC<Props> = ({ goods }) => (
  <div className="menu">
    <ul className="list-group">
      {goods.map(good => (
        <li
          className="list-item"
          key={good.id}
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  </div>

);
