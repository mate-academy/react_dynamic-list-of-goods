import React from 'react';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="list">
      {goods.map(good => (
        <li
          key={good.id}
          className="list__item"
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};
