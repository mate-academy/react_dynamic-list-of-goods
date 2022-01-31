import React from 'react';
import './GoodList.scss';

 type Prop = {
   goods: Good[] | null,
 };

export const GoodsList: React.FC<Prop> = ({ goods }) => {
  return (
    <ul className="App__list">
      {goods?.map(good => (
        <li className="App__list-item" key={good.id} style={{ color: good.color }}>
          {good.name}
        </li>
      ))}
    </ul>
  );
};
