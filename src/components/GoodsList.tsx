import React from 'react';
import '../App.scss';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = (props) => {
  const { goods } = props;

  return (
    <ul className="App__list">
      {goods.map((good: Good) => (
        <li
          key={good.id}
          style={{ color: good.color }}
          className="App__item"
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};
