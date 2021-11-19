import React from 'react';

export interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map((item: Good) => (
        <li style={{ color: item.color }} key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};
