import React from 'react';
import { Good } from '../../react-app-env';
import './Goods.scss';

interface Props {
  goodsProp: Good[]
}

export const Goods: React.FC<Props> = ({ goodsProp }) => {
  return (
    <ul className="good__list">
      {goodsProp.map((good: Good) => (
        <li className="good__item" key={good.id}>{good.name}</li>
      ))}
    </ul>
  );
};
