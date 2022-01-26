import React from 'react';

interface Goods {
  id: number,
  name: string,
  color: string,
}

type Props = {
  goods: Goods[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(item => (
        <li
          key={item.id}
          style={{ color: item.color }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};
