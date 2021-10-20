import React from 'react';
import './GoodsList.scss';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = (props) => {
  const { goods } = props;

  return (
    <ul className="GoodsList__list">
      {goods.map((good: Good) => (
        <li
          key={good.id}
          style={{ color: good.color }}
          className="GoodsList__item"
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};
