import React from 'react';
import './GoodsList.css';
import { Good } from '../Interface';

interface Props {
  goods: Good[];
}


const GoodsList: React.FC<Props> = ({ goods }) => (
  <>
    {goods.map((good: Good) => (
      <li
        key={good.id}
        className={good.color}
      >
        {good.name}
      </li>
    ))}
  </>
);

export default GoodsList;
