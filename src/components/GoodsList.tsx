import React from 'react';

type Prop = {
  goods: Good[] | null,
};

export const GoodsList: React.FC<Prop> = ({ goods }) => {
  return (
    <ul className="App__list">
      {goods?.map(good => (
        <li key={good.id} style={{ color: good.color }}>
          {good.name}
        </li>
      ))}
    </ul>
  );
};
