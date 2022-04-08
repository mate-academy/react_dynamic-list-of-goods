import React from 'react';

type Props = {
  goods: Good[]
};

export const ListOfGoods: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <li key={good.name} style={{ color: good.color }}>
          {good.name}
        </li>
      ))}
    </ul>
  );
};
