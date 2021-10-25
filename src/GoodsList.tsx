import React from 'react';

interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(({ id, name, color }) => (
        <li style={{ color }} key={id}>{name}</li>
      ))}
    </ul>
  );
};
