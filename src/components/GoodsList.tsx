import React from 'react';

type Props = {
  goodsFromServer: Good[]
};

export const GoodsList: React.FC<Props> = ({ goodsFromServer }) => {
  return (
    <ul>
      {goodsFromServer.map((good:Good) => (
        <li
          key={good.id}
          style={{ color: `${good.color}` }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};
