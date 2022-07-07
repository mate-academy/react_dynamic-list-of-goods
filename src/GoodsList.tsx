import React from 'react';

interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = React.memo(
  ({ goods }) => (
    <ul className="goods mt-5">
      {goods.map(good => (
        <li key={good.id} style={{ color: good.color }}>
          {good.name}
        </li>
      ))}
    </ul>
  ),
);
