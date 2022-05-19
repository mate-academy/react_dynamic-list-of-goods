import React from 'react';
import './GoodList.scss';

type Good = {
  id: number;
  name: string;
  color: string;
};

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="GoodList">
      {goods.map(({ id, name, color }) => (
        <li key={id} style={{ color }}>{name}</li>
      ))}
    </ul>
  );
};
