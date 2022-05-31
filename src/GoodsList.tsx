import React from 'react';

type Props = {
  goods: Good[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <div className="content">
    <ul className="goods">
      {goods.map((good) => (
        <li
          key={good.name}
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  </div>
);
