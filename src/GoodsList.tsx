import React from 'react';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="GoodsList">
      {goods.map(good => (
        <>
          <li key={good.id} className="GoodsList__list">
            <span style={{ color: good.color }}>{good.name}</span>
          </li>
        </>
      )) }
    </ul>
  );
};
