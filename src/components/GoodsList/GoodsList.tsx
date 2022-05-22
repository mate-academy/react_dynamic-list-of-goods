import React from 'react';
import './GoodsList.scss';

type Props = {
  goods: Good[];
};

const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="GoodsList">
    {goods.map(({ id, name, color }) => (
      <li
        className="GoodsList__item"
        key={id}
        style={{ color }}
      >
        {name}
      </li>
    ))}
  </ul>
);

export default GoodsList;
