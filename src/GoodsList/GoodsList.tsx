import React from 'react';
import './GoodsList.scss';

type Props = {
  goods: Good[];
};

const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="GoodList">
    {goods.map(({ id, name, color }) => (
      <li key={id} style={{ color }}>
        {name}
      </li>
    ))}
  </ul>
);

export default GoodsList;
