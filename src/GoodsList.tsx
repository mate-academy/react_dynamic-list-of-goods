import React from 'react';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="goods__list">
      {goods.map((good: Good) => (
        <li
          key={good.id}
          className="goods__list-item"
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};
