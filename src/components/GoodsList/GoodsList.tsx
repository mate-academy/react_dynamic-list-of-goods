import React from 'react';

type Props = {
  goods: Good[],
};

export const GoodsList:React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <li
          key={good.id}
          style={{ color: good.color }}
          className="goodsList__list--link"
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};
