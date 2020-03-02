import React, { FC } from 'react';

type Props = {
  goods: {id: number; name: string; color: string}[];
};

export const GoodsList: FC<Props> = ({ goods }) => (
  <ul className="list">
    {goods.map(good => (
      <li key={good.id} className="list__item" style={{ color: good.color }}>
        {good.name}
      </li>
    ))}
  </ul>
);
