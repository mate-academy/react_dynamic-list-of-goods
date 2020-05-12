import React from 'react';

export interface Goods {
  id: number;
  name: string;
  color: string;
}

interface Props {
  goods: Array<Goods>;
}

export const GoodList = (props: Props) => {
  const { goods } = props;

  return (
    <div className="goods">
      <div className="goods__container">
        <ul>
          {goods.map((good: Goods) => (
            <li key={good.id} style={{ color: `${good.color}` }}>
              {good.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
