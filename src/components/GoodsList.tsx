import React from 'react';

import { Goods } from './interfaces';


interface Props {
  goods: Array<Goods>;
}

export const GoodsList = (props: Props) => {
  const { goods } = props;

  return (
    <div>
      <ul>
        {goods.map(good => (
          <li
            key={good.id}
            style={{ color: `${good.color}` }}
          >
            {good.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
