import React from 'react';
import './GoodsList.scss';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="list">
      {goods.map(({ id, color, name }) => (
        <li key={id} style={{ color }} className="list__item">
          {name}
        </li>
      ))}
    </ul>
  );
};
