import React from 'react';
import { Good } from '../../react-app-env';
import './GoodsList.scss';

type Props = {
  goods: Good[],
};

const GoodsList:React.FC<Props> = ({ goods }) => {
  return (
    <ul className="list">
      {goods.map(good => (
        <li
          key={good.id}
          className="list__item"
        >
          <p>{good.id}</p>
          <p style={{ color: good.color }}>{good.name}</p>
          <p>{good.color}</p>
        </li>
      ))}
    </ul>
  );
};

export default GoodsList;
