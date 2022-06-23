import React from 'react';

type Props = {
  goods: Good[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="list">
      {goods.map(good => (
        <li
          key={good.id}
          style={{ color: good.color }}
          className="list__item"
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};
