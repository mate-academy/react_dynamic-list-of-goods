import React from 'react';

type Props = {
  shownGoods: Good[];
};

export const GoodsList: React.FC<Props> = ({ shownGoods }) => {
  return (
    <ul className="goods">
      {shownGoods.map((good) => (
        <li
          style={{ color: `${good.color}` }}
          key={good.id}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};
