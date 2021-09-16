import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="list-group list-group-numbered">
    {goods.map((good: Good) => (
      <li
        key={good.id}
        style={{ color: good.color }}
        className="list-group-item"
      >
        {good.name}
      </li>
    ))}
  </ul>
);
