import React from 'react';
import { Items } from './Interfaces';

type Props = {
  goods: Array<Items>;
};

export const GoodList = (props: Props) => {
  const { goods } = props;

  return (
    <div className="goods">
      <div className="goods__list">
        <ul>
          {goods.map((good: Items) => (
            <li key={good.id} style={{ color: `${good.color}` }}>
              {good.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
