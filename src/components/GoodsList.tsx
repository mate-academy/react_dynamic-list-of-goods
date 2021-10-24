import React from 'react';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="goods-list flex-col">
      {goods.map(good => {
        return (
          <li
            key={good.id}
            className={`goods-item bg-${good.color}-200 text-${good.color}-800 m-1 rounded-full text-center shadow-md`}
          >
            {good.name}
          </li>
        );
      })}
    </ul>
  );
};
