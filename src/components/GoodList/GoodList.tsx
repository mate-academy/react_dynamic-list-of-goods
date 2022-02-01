import React from 'react';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="GoodsList">
      {goods.map(good => (
        <li
          className="box GoodsList__item"
          key={good.id}
        >
          <span style={{ color: `${good.color}` }}>
            {good.name}
          </span>
        </li>
      ))}
    </ul>
  );
};
