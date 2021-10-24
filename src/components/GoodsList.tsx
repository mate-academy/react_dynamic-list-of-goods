import React from 'react';

import './GoodsList.css';

type Props = {
  goods: Good[] | [];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="list mt-5">
      {goods.map(({ name, color }) => (
        <li
          className="title is-5"
          style={{ color }}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};
